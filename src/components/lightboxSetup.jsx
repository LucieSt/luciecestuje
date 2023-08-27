import React from "react";
import Lightbox from "react-image-lightbox";

const images = [
  "https://res.cloudinary.com/dnwbnhdof/image/upload/v1684349918/ojhoheie2sxal6agg4ro.jpg",
  "https://res.cloudinary.com/dnwbnhdof/image/upload/v1684349839/enoipvzwf45bbboxn4ey.jpg",
];

export default class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="my-3">
        <h1 className="text-middle mt-4">Photos</h1>
        <div className="row">
          <div className="col">
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
            />
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
            />
          </div>
          <div className="col">
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
            />
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
            />
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
            />
          </div>
          <div className="col">
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
            />
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
            />
            <img
              src="url"
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
            />
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
