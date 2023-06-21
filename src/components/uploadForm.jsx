import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase";
import { useState } from "react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import ReactMarkdown from "react-markdown";
import "./../styles/uploadForm.sass";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description, images);

    try {
      const docRef = await addDoc(collection(db, "travels"), {
        title: title,
        text: description,
        images: images,
        main_image: images[0],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleClick = (e) => {
    const unwantedImage = e.target.offsetParent.firstChild.currentSrc;
    setImages(
      images.filter((image) => {
        return image !== unwantedImage;
      })
    );
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
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
          />
        </div>
        <ReactMarkdown>{description}</ReactMarkdown>
        <div className="form-item">
          <label>nahrat fotky</label>
          <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
        </div>
        <div>
          {images.map((image) => {
            return (
              <div className="image-container" key={image}>
                <img src={image} width="300px"></img>
                <div onClick={handleClick}>X</div>
              </div>
            );
          })}
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
