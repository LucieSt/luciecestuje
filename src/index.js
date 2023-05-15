import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Travels from "./components/travels";
import Home from "./components/home";
import Travel from "./components/travel";

const router = createBrowserRouter([
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
