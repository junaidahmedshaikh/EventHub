// import React from "react";
import Navbar from "../../navbar";
import Footer from "../../pages/component/mainComponent/footer";
import { Outlet } from "react-router-dom";
import { ContactInfoProvider } from "./smallComponent/ContactInfoProvider";

export default function layout() {
  // console.log(Outlet);
  return (
    <>
      <ContactInfoProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContactInfoProvider>
    </>
  );
}
