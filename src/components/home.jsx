import { useEffect, useContext } from "react";
import { AuthContext } from "../authContext";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const { setSignedIn, loading } = useContext(AuthContext);

  useEffect(() => {
    // No need to check the loading state here

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  if (loading) {
    // Render a loading state if the authentication state is still being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export default Home;
