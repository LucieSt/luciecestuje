// cloudinary setup
// import { fill, scale } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import { useState } from "react";
// import { format, quality } from "@cloudinary/url-gen/actions/delivery";
// import { auto } from "@cloudinary/url-gen/qualifiers/quality";

const CloudinarySetup = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const myImage = new CloudinaryImage("sample", {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  });

  const handleImageUpload = (imageInfo) => {
    console.log("Image Info:", imageInfo.secure_url);
  };

  return (
    <>
      <h2>cloudinary</h2>
      <AdvancedImage cldImg={myImage} />
      <div>
        <h2>Upload Widget</h2>
        <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
      </div>

      <img id="uploadedimage" src=""></img>
    </>
  );
};

export default CloudinarySetup;
