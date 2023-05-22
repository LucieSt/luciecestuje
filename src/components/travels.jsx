import "./../styles/travels.sass";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../authContext";

const Travels = () => {
  const [travelData, setTravelData] = useState([]);
  const { signedIn, setSignedIn } = useContext(AuthContext);

  console.log(signedIn);

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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setSignedIn(true);
      } else {
        // User is signed out
        setSignedIn(false);
        console.log("user is logged out");
      }
    });
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
