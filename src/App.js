import "./App.css";
// import CloudinarySetup from "./components/cloudinarySetup";
// import FirebaseSetup from "./components/firebaseSetup";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <CloudinarySetup />
      <FirebaseSetup /> */}

      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
