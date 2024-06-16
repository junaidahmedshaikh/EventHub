import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
// import Navbar from "./navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Event from "./pages/event.jsx";
import Gallery from "./pages/gallery.jsx";
// import GetQuote from "./pages/getQuote.jsx";
import Contact from "./pages/contact.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout.jsx";

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
        path: "/event",
        element: <Event />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
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
