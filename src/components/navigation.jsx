import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/navigation.sass";
import { AuthContext } from "../authContext";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const { signedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  });

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
    <header className={`nav-wrapper ${scroll ? "sticky" : ""}`}>
      <div className="nav-container">
        <span className="nav-logo">
          <Link to="/">luciecestuje</Link>
        </span>
        <nav className="nav-links">
          <Link to="/cesty" className="nav-travels nav-link">
            CESTY
          </Link>
          <Link to="/onas" className="nav-about nav-link">
            O NAS
          </Link>
          <Link to="/" className="nav-home nav-link">
            DOMU
          </Link>
          {signedIn && (
            <span className="nav-signout nav-link" onClick={handleLogout}>
              ODHLASIT
            </span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
