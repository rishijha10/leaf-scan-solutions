import { useState } from "react";
import { useRef } from "react";
import { ClipLoader } from "react-spinners";
import { db, storage } from "../util/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import MainContext from "../store/MainContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { formatDiseaseName } from "../pages/MyPlants";
import Remedies from "./Remedies";
import Prevention from "./Prevention";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(MainContext);
  const [remedies, setRemedies] = useState([]);
  const [prevention, setPrevention] = useState([]);
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
          let remedyArray;
          let preventionArray;
          try {
            const request = await fetch(
              "https://api.openai.com/v1/chat/completions",
              {
                method: "POST",
                body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [
                    {
                      role: "user",
                      content: `Please provide me the arrays of 3 prevention tips someone can take for their plants suffering with the ${data.predicted_disease} disease in brief and nothing else. Thank you!`,
                    },
                  ],
                  temperature: 0.7,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " +
                    "sk-proj-qghiVjvnoedUFsCMr03VT3BlbkFJqnFKqp6p7ctLD0te8IQ9",
                },
              }
            );
            if (!request.ok) {
              throw new Error("Failed to fetch data from API");
            }
            const response = await request.json();
            const content = response.choices[0].message.content;
            remedyArray = content.split("\n");
          } catch (error) {
            console.log("Error fetching data from API: ", error);
          }

          //fetching prevention
          try {
            const request = await fetch(
              "https://api.openai.com/v1/chat/completions",
              {
                method: "POST",
                body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [
                    {
                      role: "user",
                      content: `Please provide me the arrays of 3 prevention tips someone can take for their plants suffering with the ${data.predicted_disease}  diseease in brief and nothing else. Thank you!`,
                    },
                  ],
                  temperature: 0.7,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " +
                    "sk-proj-qghiVjvnoedUFsCMr03VT3BlbkFJqnFKqp6p7ctLD0te8IQ9",
                },
              }
            );
            if (!request.ok) {
              throw new Error("Failed to fetch data from API");
            }
            const response = await request.json();
            const content = response.choices[0].message.content;
            preventionArray = content.split("\n");
            console.log(preventionArray);
          } catch (error) {
            console.log("Error fetching data from API: ", error);
          }
          const storageRef = ref(
            storage,
            `user-plant-images/${user.uid}/${selectedFile.name}`
          );
          const uploadRef = await uploadBytes(storageRef, selectedFile);
          const downloadUrlRef = await getDownloadURL(uploadRef.ref);
          // console.log(downloadUrlRef);
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
            setRemedies(remedyArray);
            setPrevention(preventionArray);
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
        <div className="mt-8 py-4 rounded-lg">
          <h2 className="font-bold font-pop mb-2 text-xl">
            Predicted Disease:
          </h2>
          <p>{prediction}</p>
        </div>
      )}
      {/* {remedies.length > 0 && (
        <>
          <h1 className=" font-pop text-xl font-semibold my-5">Remedies</h1>
          <div className=" space-y-2 bg-[#506385] text-[#f9f9e9] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-4 px-7 rounded">
            {remedies.map((item, index) => {
              return (
                <li key={index} className=" text-base  font-semibold">
                  {item}
                </li>
              );
            })}
          </div>
        </>
      )} */}
      <Remedies remedies={remedies} />
      <Prevention prevention={prevention} />
      {/* {prevention.length > 0 && (
        <>
          <h1 className=" font-pop text-xl font-semibold my-5">Prevention</h1>
          <div className=" space-y-2 bg-[#353935] text-[#f9f9e9] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-4 px-7 rounded">
            {prevention.map((item, index) => {
              return (
                <li key={index} className=" text-base  font-semibold">
                  {item}
                </li>
              );
            })}
          </div>
        </>
      )} */}
    </div>
  );
};

export default Form;
