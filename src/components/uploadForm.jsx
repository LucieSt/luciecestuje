import { useState } from "react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";

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
    <form>
      <label>nazev cesty</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>popis</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
      <button onClick={handleSubmit}>ulozit novou cestu</button>
    </form>
  );
};

export default UploadForm;
