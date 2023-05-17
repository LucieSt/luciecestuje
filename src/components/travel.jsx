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

  const { title, year, text } = selectedTravelData || {};

  return (
    <div className="travel">
      {selectedTravelData && (
        <>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default Travel;
