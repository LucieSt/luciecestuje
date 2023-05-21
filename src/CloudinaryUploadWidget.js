import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        // cropping: "true",
        // croppingShowBackButton: true,
        // croppingAspectRatio: 16 / 9, // Set aspect ratio for cropping (e.g., 1 for square, 16/9 for widescreen)
        // croppingDefaultSelectionRatio: 0.8, // Set default selection ratio for cropping (0 to 1)
        // croppingShowDimensions: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          const imageInfo = result.info;
          this.props.onImageUpload(imageInfo);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
