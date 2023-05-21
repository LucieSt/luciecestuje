import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Travels from "./components/travels";
import Home from "./components/home";
import Travel from "./components/travel";
import Signin from "./components/signIn";
import Login from "./components/login";
import UploadForm from "./components/uploadForm";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const AppContainer = () => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
        console.log("user is logged out");
      }
    });
  }, []);

  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cesty",
          element: <Travels />,
        },
        {
          path: "/onas",
          element: <About />,
        },
        {
          path: "/cesty/:travelId",
          element: <Travel />,
        },
        {
          path: "/novacesta",
          element: signedIn ? <UploadForm /> : null,
        },
      ],
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
