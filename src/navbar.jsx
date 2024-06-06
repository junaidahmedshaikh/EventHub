// import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

import { useState } from "react";

export default function navbar() {
  const [isOpen, setOpen] = useState(true);
  return (
    <section className="fixed top-0 z-50 w-full md:top-2">
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between rounded-xl border border-primary bg-[#fff9] px-6 py-3 backdrop-blur  lg:bg-white/60">
        <div className="flex w-full items-center justify-between lg:w-auto">
          {" "}
          <Link href="/">
            <img
              className="h-8 w-auto md:h-12"
              alt=""
              width="88"
              height="48"
              src="https://res.cloudinary.com/difvkvxuy/image/upload/c_crop,w_330,h_300/v1716712923/DecorbyBuddy/dbblogowithoutbg.png"
            />
          </Link>{" "}
        </div>
        <NavLink
          id="menu-nav"
          className="mt-2 gap-4 text-dark-secondary font-paraFont  hidden w-full lg:mt-0 lg:flex lg:w-auto"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/getQuote"> Get a quote </Link>
        </NavLink>
        <div>
          <div className="hidden items-center gap-4 border-l border-base-300 pl-5 lg:flex">
            {" "}
            <a
              href="https://www.instagram.com/jas_officials/"
              aria-label="Go to WOW Balloons Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-square btn-ghost"
            >
              <FaInstagram className="text-title-color text-[25px]" />
            </a>{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Call to the Decor By Buddy"
              className="btn btn-square btn-ghost"
            >
              <LiaPhoneSquareSolid className="text-title-color  text-[32px]" />
            </a>{" "}
          </div>
        </div>
        <button
          className="visible lg:hidden transform transition duration-700 ease-in-out "
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          {isOpen ? <RiMenu4Fill /> : <MdOutlineClose />}
        </button>
      </div>
      {/* Hamburger Menu */}
      <div
        className={`w-full  border-b border-primary bg-[#fff9] px-6 py-3 backdrop-blur transf  lg:hidden ${
          isOpen ? "hidden" : "visible"
        }`}
      >
        {" "}
        <ul className="menu lg:menu-horizontal">
          <NavLink
            id="menu-nav"
            className="flex flex-col mt-2 gap-4 text-dark-secondary font-semibold w-full lg:mt-0 lg:w-auto"
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/getQuote"> Get a quote </Link>
          </NavLink>
        </ul>{" "}
        <div className="mt-3 flex items-center gap-4 max-md:hidden">
          <div>
            <div className="hidden items-center gap-4 border-l border-base-300 pl-5 lg:flex">
              {" "}
              <a
                href="https://www.instagram.com/jas_officials/"
                aria-label="Go to WOW Balloons Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-square btn-ghost"
              >
                <FaInstagram className="text-title-color text-2xl" />
              </a>{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call to the Decor By Buddy"
                className="btn btn-square btn-ghost"
              >
                <LiaPhoneSquareSolid className="text-title-color rounded-md text-3xl rounded-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
