import "./../styles/travels.sass";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";

const Travels = () => {
  const [travelData, setTravelData] = useState([]);

  const displayData = async () => {
    await getDocs(collection(db, "travels")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTravelData(newData);
      console.log(travelData, newData);
    });
  };

  useEffect(() => {
    displayData();
  }, []);

  return (
    <div className="travels">
      <div className="travels-list">
        {travelData &&
          travelData.map((cesta) => {
            const url = `/cesty/${cesta.title}`;
            return (
              <Link key={cesta.id} to={url}>
                <div className="travels-link-container">
                  <div className="travels-img">
                    <img
                      src={cesta.main_image}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                    <h3>{cesta.title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Travels;
