// cloudinary and firebase setup
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";

const CloudinarySetup = () => {
  const myImage = new CloudinaryImage("sample", {
    cloudName: "dnwbnhdof",
  });

  return (
    <>
      <div>cloudinary</div>
      <AdvancedImage cldImg={myImage} />
      <div>
        <h2>Upload Widget</h2>
        <CloudinaryUploadWidget />
      </div>

      <img id="uploadedimage" src=""></img>
    </>
  );
};

export default CloudinarySetup;
