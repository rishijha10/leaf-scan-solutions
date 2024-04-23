import React, { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          if (data && data.predicted_disease) {
            setPrediction(data.predicted_disease);
          }
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-gray-200 p-4 rounded-lg">
        <label htmlFor="fileInput" className="cursor-pointer flex items-center">
          <IoCloudUploadOutline style={{ fontSize: '20px' }} />
          <input type="file" accept="image/*" id="fileInput" onChange={handleFileChange} className="hidden" />
          <div className="ml-2">
            <p>Select or Drag your Image here</p>
            <p>File type - jpg. jpeg.</p>
          </div>
        </label>
        <button onClick={handleUpload} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Upload Image
        </button>
      </div>
      {selectedImage && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Your selected Image</h2>
          <img src={selectedImage} alt="Selected" className="max-w-full" />
        </div>
      )}
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
 