import "./../styles/travel.sass";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Gallery } from "react-grid-gallery";
import { Photos } from "./lightboxSetup";

const Travel = () => {
  const [selectedTravelData, setSelectedTravelData] = useState(null);

  const { travelId } = useParams();

  const displayData = async () => {
    const querySnapshot = await getDocs(collection(db, "travels"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const foundTravelData = newData.find((cesta) => cesta.title === travelId);
    setSelectedTravelData(foundTravelData);
  };

  useEffect(() => {
    displayData();
  }, []);

  const handleClick = (e, index) => {
    console.log(index);
  };

  const galleryImages = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];

  const { title, year, text, images } = selectedTravelData || {};

  return (
    <div className="travel">
      {selectedTravelData && (
        <>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{text}</p>
          {images.map((image, index) => {
            return (
              <img
                key={image}
                className="travel-image"
                id={index}
                src={image}
                width="300px"
                onClick={(e) => handleClick(e, index)}
              ></img>
            );
          })}
          <Gallery images={galleryImages} />
          <Photos />
        </>
      )}
    </div>
  );
};

export default Travel;
