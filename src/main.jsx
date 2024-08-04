import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
// import Navbar from "./navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Event from "./pages/Event.jsx";
import Gallery from "./pages/Gallery.jsx";
// import GetQuote from "./pages/getQuote.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./pages/Layout.jsx";

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
        path: "/About",
        element: <About />,
      },
      {
        path: "/Event",
        element: <Event />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Contact",
        element: <Contact />,
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
