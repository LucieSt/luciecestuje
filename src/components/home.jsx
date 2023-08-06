import { useContext } from "react";
import { AuthContext } from "../authContext";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    // Render a loading state if the authentication state is still being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>home</h2>
      <p>something</p>
    </div>
  );
};

export default Home;
