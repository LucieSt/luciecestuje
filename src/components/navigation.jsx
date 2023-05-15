import { Link } from "react-router-dom";
import "./../styles/navigation.sass";

const Navigation = () => {
  return (
    <div className="nav-container">
      <span className="nav-logo">
        <Link to="/">luciecestuje</Link>
      </span>
      <nav className="nav-links">
        <Link to="/cesty">cesty</Link>
        <Link to="/onas" className="nav-about">
          o nas
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
