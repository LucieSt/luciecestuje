import { useContext } from "react";
import { Link } from "react-router-dom";
import "./../styles/navigation.sass";
import { AuthContext } from "../authContext";

const Navigation = () => {
  const { signedIn } = useContext(AuthContext);

  return (
    <div className="nav-container">
      <span className="nav-logo">
        <Link to="/">luciecestuje</Link>
      </span>
      <nav className="nav-links">
        {signedIn && (
          <Link to="/" className="nav-signout">
            odhlasit
          </Link>
        )}
        <Link to="/cesty" className="nav-travels">
          cesty
        </Link>
        <Link to="/onas" className="nav-about">
          o nas
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
