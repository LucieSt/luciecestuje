import "./../styles/travel.sass";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";

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

  const { title, year, text, images, main_image } = selectedTravelData || {};

  const myStyle = { backgroundImage: `url(${main_image})` }

  return (
    <div className="travel">
      {selectedTravelData && (
        <>
          <div className="travel-banner banner" style={myStyle}>
            <div>
              <h2 className='banner-headline'>{title}</h2>
              <p className='banner-subheadline'>{year}</p>
            </div>
          </div>

          <p>{text}</p>

          <ul className="travel-container">
            {images.map((image, index) => {
              return (
                <li>
                  <img
                    key={image}
                    className="travel-image"
                    id={index}
                    src={image}
                    width="100%"
                    onClick={(e) => handleClick(e, index)}
                    alt={image}
                  ></img>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Travel;
