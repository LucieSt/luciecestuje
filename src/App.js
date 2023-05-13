import "./App.css";
import CloudinarySetup from "./components/cloudinarySetup";
import FirebaseSetup from "./components/firebaseSetup";

function App() {
  return (
    <div className="App">
      <h1>lucie cestuje</h1>

      <CloudinarySetup />
      <FirebaseSetup />
    </div>
  );
}

export default App;
