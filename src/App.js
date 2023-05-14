import "./App.css";
import CloudinarySetup from "./components/cloudinarySetup";
import FirebaseSetup from "./components/firebaseSetup";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* <CloudinarySetup />
      <FirebaseSetup /> */}

      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
