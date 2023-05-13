// cloudinary setup
import { fill, scale } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";

const CloudinarySetup = () => {
  const myImage = new CloudinaryImage("sample", {
    cloudName: "dnwbnhdof",
  });

  return (
    <>
      <h2>cloudinary</h2>
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
