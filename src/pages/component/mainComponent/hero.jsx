// import React from 'react'
import { useContactInfo } from "../smallComponent/ContactInfoProvider";
export default function hero() {
  const { phoneNumber } = useContactInfo();
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/difvkvxuy/image/upload/v1717320422/DecorbyBuddy/Hero/3d97cb28-9ba0-4545-8b41-39c8988a817f.png)",
      }}
      className=" min-h-screen bg-cover bg-right bg-no-repeat"
    >
      <div className="bg-black min-h-screen  flex items-center bg-opacity-10">
        <div className="max-w-screen-xl w-full mx-auto px-5 ">
          <div className="flex flex-col gap-4 text-white">
            <div className="text-primary primary-font">
              <h1 className=" font-titleFont font-medium text-3xl md:text-4xl  lg:text-5xl lg:tracking-tight xl:tracking-tighter">
                <span className=" md:rounded-lg text-dark-secondary ">
                  Best{" "}
                </span>
                balloon decorations for your party
              </h1>
              <p className="max-w-lg font-paraFont font-medium">
                {" "}
                Welcome to the World of Balloon Magic: Elevating Every Occasion
                with Creative Creations!{" "}
              </p>
            </div>
            <div className="max-w-lg w-fit h-auto isolate rounded-xl bg-[#fff9] px-6 py-3 backdrop-blur ">
              <div role="alert" className="alert">
                {" "}
                <div>
                  {" "}
                  <span className="font-sans max-sm:text-sm max-sm:font-bold font-medium text-title-color">
                    Contact Us for a Personalized Consultation{" "}
                    <a className="" href={"tel:+91" + phoneNumber}>
                      at +91 {phoneNumber}
                    </a>{" "}
                  </span>
                  {/* <div className="text-para-color font-medium "></div> */}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
