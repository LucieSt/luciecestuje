import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/navigation.sass";
import { AuthContext } from "../authContext";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const { signedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="nav-container">
      <span className="nav-logo">
        <Link to="/">luciecestuje</Link>
      </span>
      <nav className="nav-links">
        {signedIn && (
          <span className="nav-signout" onClick={handleLogout}>
            odhlasit
          </span>
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
