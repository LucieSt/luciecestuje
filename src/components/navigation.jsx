import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <span>
        <Link to="/">luciecestuje</Link>
      </span>
      <nav>
        <Link to="/cesty">cesty</Link>
        <span> | </span>
        <Link to="/onas">o nas</Link>
      </nav>
    </div>
  );
};

export default Navigation;
