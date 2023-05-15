import { useParams } from "react-router-dom";

const cesty = [
  {
    id: 1,
    title: "Vietnam",
    text: "bla bla bla",
    year: 2019,
    images: ["as56", "344hh", "444h"],
  },
  {
    id: 2,
    title: "Toskansko",
    text: "bla bluuu bla",
    year: 2022,
    images: ["555l", "344hh", "333l"],
  },
  {
    id: 3,
    title: "Madeira",
    text: "bloo bluu",
    year: 2022,
    images: ["ddd3", "33g", "444h"],
  },
  {
    id: 4,
    title: "Barcelona",
    text: "blii blaaa bluu",
    year: 2022,
    images: ["as56", "33g", "444h"],
  },
  {
    id: 5,
    title: "Fuerteventura a Tenerife",
    text: "bla blu blaaaai",
    year: 2023,
    images: ["555l", "344hh", "333l"],
  },
];

const Travel = () => {
  const { travelId } = useParams();
  const travelData = cesty.find((cesta) => cesta.id.toString() === travelId);
  const { title, text, year } = travelData;

  return (
    <div className="travel">
      <h3>{title}</h3>
      <h4>{year}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Travel;
