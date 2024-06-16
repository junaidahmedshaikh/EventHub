import { LuMail } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { useContactInfo } from "../smallComponent/ContactInfoProvider";

export default function footer() {
  const { phoneNumber, emailAddress } = useContactInfo();
  return (
    <div className="border-t border-secondary  bg-secondary pt-10 pb-8 md:py-12">
      <div className="max-w-screen-xl w-full mx-auto px-5">
        <div className="grid gap-4 lg:grid-cols-4 pb-10 text-dark-secondary ">
          <div className="flex flex-col gap-4 md:gap-2">
            <div className="flex flex-col gap-4 md:gap-2 border-b pb-5 w-8/12">
              <p className="text-lg font-bold font-sans text-title-color md:max-w-[42ch]">
                GET IN TOUCH
              </p>{" "}
              <a
                href={"mailto:" + emailAddress}
                className="text-dark-secondary text-md flex items-center"
              >
                <LuMail className="text-xl pr-1" />
                <span>{emailAddress}</span>
              </a>{" "}
              <a
                href={"tel:+91" + phoneNumber}
                className="text-dark-secondary text-md flex items-center"
              >
                <TbPhoneCall className="text-xl pr-1" /> +91 {phoneNumber}
              </a>{" "}
            </div>
            {/* Social Media */}
            <div>
              <p className="text-lg font-bold font-sans text-title-color md:max-w-[42ch]">
                SOCIAL
              </p>{" "}
              <span className="flex pt-3">
                {" "}
                <a
                  href="https://www.instagram.com/jas_officials/"
                  className="hover:opacity-50 hover:scale-110 transition-all"
                >
                  {" "}
                  <FaInstagram className="text-xl text-dark-secondary mr-3" />
                </a>
                <a
                  href=""
                  className="hover:opacity-50 hover:scale-110 transition-all"
                >
                  <FaWhatsapp className="text-xl text-dark-secondary pr-1" />
                </a>
              </span>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <p className="text-lg font-bold font-sans text-title-color">
              QUICK LINKS
            </p>{" "}
            <a href="" className="">
              Home
            </a>{" "}
            <a href="" className="">
              About
            </a>{" "}
            <a href="" className="">
              Gallery
            </a>{" "}
            <a href="" className="">
              Quote
            </a>{" "}
            {/* <a href="" className="">
              About
            </a>{" "} */}
          </nav>
          <nav className="flex flex-col gap-2">
            <p className="text-lg font-bold font-sans text-title-color">Menu</p>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
          </nav>
          <nav className="flex flex-col gap-2">
            <p className="text-lg font-bold font-sans text-title-color">
              Social Event
            </p>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
          </nav>
          {/* <nav className="flex flex-col">
            <p className="text-lg font-bold text-title-color">Social Event</p>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
            <a href="" className="">
              Event Name
            </a>{" "}
          </nav> */}
        </div>
        <div className="footer text-dark-secondary border-t border-base-300 pt-4 text-base-content">
          <aside className=" text-dark-secondary grid-flow-col items-center">
            {" "}
            <p>Decor By Buddy LLC © 2024-2028 </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4"></div>
          </nav>
        </div>
      </div>
    </div>
  );
}
