import { useState } from "react";
import { useRef } from "react";
import { ClipLoader } from "react-spinners";
import { db, storage } from "../util/firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import MainContext from "../store/MainContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { formatDiseaseName } from "../pages/MyPlants";
const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(MainContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // e.preventDefault();
    if (selectedFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(async (data) => {
          const storageRef = ref(
            storage,
            `user-plant-images/${user.uid}/${selectedFile.name}`
          );
          const uploadRef = await uploadBytes(storageRef, selectedFile);
          const downloadUrlRef = await getDownloadURL(uploadRef.ref);
          console.log(downloadUrlRef);
          await addDoc(collection(db, "user-plants"), {
            name: selectedFile.name,
            image: downloadUrlRef,
            createdAt: Date.now(),
            predictedDisease: data.predicted_disease,
            user: user.uid,
          });
          if (data && data.predicted_disease) {
            const formattedName = formatDiseaseName(data.predicted_disease);
            setPrediction(formattedName);
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const fileRef = useRef();

  return (
    <div className="container mx-auto">
      <div className="py-4 rounded-lg">
        <div
          onClick={() => {
            fileRef.current?.click();
          }}
          className=" border-2 border-gray-300 border-dotted w-[50%] h-64 flex justify-center items-center"
        >
          {selectedFile ? (
            <img src={selectedImage} alt="Selected" className="h-[90%]" />
          ) : (
            <p className=" font-inter">Click here to upload image</p>
          )}
        </div>
        <label htmlFor="fileInput" className="cursor-pointer flex items-center">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <button
          disabled={loading}
          onClick={handleUpload}
          className="mt-4 bg-[#ff612f] hover:bg-[#ff8e6c] text-white h-[42px] w-36 font-bold py-2 px-4 rounded transition duration-300"
        >
          {loading ? <ClipLoader color="#fff" size={25} /> : "Upload Image"}
        </button>
      </div>

      {prediction && (
        <div className="mt-8 bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Predicted Disease:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
