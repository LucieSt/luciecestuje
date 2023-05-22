import "./../styles/travels.sass";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../authContext";

const Travels = () => {
  const [travelData, setTravelData] = useState([]);
  const { signedIn } = useContext(AuthContext);

  const displayData = async () => {
    await getDocs(collection(db, "travels")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTravelData(newData);
    });
  };

  useEffect(() => {
    displayData();
  }, []);

  return (
    <div className="travels">
      <div className="travels-list">
        {signedIn && (
          <Link to="/novacesta">
            <div className="travels-link-container">
              <div className="travels-img">
                <img
                  src="https://res.cloudinary.com/dnwbnhdof/image/upload/v1684698763/xhyozoujfrrnzisptc6v.jpg"
                  alt="image"
                  width="100%"
                  height="auto"
                />
                <h3>+</h3>
              </div>
            </div>
          </Link>
        )}
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
