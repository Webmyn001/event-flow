import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  // Convert file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFileChange = async (e) => {
    setError("");
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > 3 * 1024 * 1024) {
      setError("File size must be 3MB or less");
      return;
    }

    const base64 = await convertToBase64(selectedFile);
    setFile(base64);
  };

  const handleUpload = async () => {
    if (!file) return setError("No file selected");

    try {
      const res = await axios.post("http://localhost:5000/api/upload", {
        image: file,
      });
      setImageUrl(res.data.url);
      setError("");
      fetchImages(); // refresh images list
    } catch (err) {
      console.error(err);
      setError("Upload failed");
    }
  };

  const fetchImages = async () => {
    const res = await axios.get("http://localhost:5000/api/images");
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="uploaded" width={200} />
        </div>
      )}

      <h3>All Images:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((img) => (
          <img key={img._id} src={img.url} alt="saved" width={100} />
        ))}
      </div>
    </div>
  );
};

export default UploadForm;
