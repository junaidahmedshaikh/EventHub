import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
// import Navbar from "./navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Gallery from "./pages/gallery.jsx";
import GetQuote from "./pages/getQuote.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/component/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/getQuote",
        element: <GetQuote />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//  <Home />
//     <WelcomeBanner />
//     <Category />
//     <Feature />
//     <MiniGallery />
//     <MiniContact />
//     <Footer />
