import { useState } from "react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import "./../styles/uploadForm.sass";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, images);
  };

  const handleImageUpload = (imageInfo) => {
    setImages((currentImages) => [...currentImages, imageInfo.secure_url]);
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-item">
          <label>nazev cesty</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>popis</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>nahrat fotky</label>
          <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
        </div>
        <div className="form-item">
          <button onClick={handleSubmit} className="form-btn">
            ulozit novou cestu
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
