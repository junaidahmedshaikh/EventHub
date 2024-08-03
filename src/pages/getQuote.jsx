// import React from "react";
import { useState } from "react";
import { useContactInfo } from "./component/smallComponent/ContactInfoProvider";

export default function GetQuote() {
  const [result, setResult] = useState("");

  const { phoneNumber, emailAddress, address } = useContactInfo();
  const Public_Key = "7a2e7dc8-5ab4-4262-879d-d118b8fe7e49";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", Public_Key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      console.log("Working");
    } else {
      console.log("Error", data);
      setResult(data.message);
      console.log("Error");
    }
  };

  return (
    <section className="pt-32 px-32 max-md:px-20 max-sm:px-5">
      <div className="flex flex-col justify-center items-center py-20 px-32 my-5 border rounded border-dark-secondary bg-secondary max-md:px-20 max-sm:px-5">
        <h1 className="text-3xl font-paraFont font-bold my-1 text-dark-secondary">
          Contact Us
        </h1>
        <span className="font-semibold text-md text-dark-secondary opacity-60">
          In order to get the most accurate quote please fill out the contact
          form and provide as many details as possible
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-paraFont font-bold dark:text-gray-100">
            Contact Us
          </h2>
          <p className="max-w-sm font-sans mt-4 mb-4 dark:text-gray-400">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                /* stroke-linecap="round"
                stroke-linejoin="round" */
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              ></path>
            </svg>
            <span>{address}</span>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                /* stroke-linecap="round"
                stroke-linejoin="round" */
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
            <a href="mailto:hello@company.com">{emailAddress}</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                /* stroke-linecap="round"
                stroke-linejoin="round" */
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              ></path>
            </svg>
            <a href="tel:11111111111">{phoneNumber}</a>
          </div>
        </div>
        <form action={onSubmit} className="flex flex-col gap-4">
          <input type="hidden" name="access_key" value={Public_Key} />

          {/* Full Name Input */}
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="clientName"
              name="name"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter Full Name"
            />
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="clientEmailID"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="clientEmailID"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="emailID@gmail.com"
            />
          </div>
          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="clientNumber"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="phone"
              name="clientNumber"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="9000000000"
            />
          </div>
          {/* Project date Input */}
          <div>
            <label
              htmlFor="clientProjectDate"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Project date
            </label>
            <input
              type="date"
              name="clientProjectDate"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="00/00/2024"
            />
          </div>
          {/* Is your event indoors or outdoors?  checkbox */}
          {/* <div className=" space-y-3">
            <label
              htmlFor=""
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Is your event indoors or outdoors?
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="clientEventIndoor"
                name="clientEventIndoor"
                className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label
                htmlFor="example1"
                className="text-md font-medium text-gray-700"
              >
                Indoor
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="clientEventOutdoor"
                checked
                name="clientEventOutdoor"
                className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label
                htmlFor="example2"
                className="text-md font-medium text-gray-700"
              >
                Outdoor
              </label>
            </div>
          </div> */}
          {/* What time does your event start?  */}
          <div>
            <label
              htmlFor="clientEventStartDate"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              What time does your event start?
            </label>
            <input
              type="time"
              name="clientEventStartDate"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="12:00-AM"
            />
          </div>
          {/* What time does your event end?  */}
          <div>
            <label
              htmlFor="clientEventEndDate"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              What time does your event end?
            </label>
            <input
              type="time"
              name="clientEventEndDate"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="12:00-AM"
            />
          </div>
          {/* What is the occasion? Dropdown */}
          <div>
            <label
              htmlFor="clientOccasion"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              What is the occasion?
            </label>
            <input
              type="text"
              name="clientOccasion"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Birthday Party"
            />
          </div>
          {/* Event Address */}
          <div>
            <label
              htmlFor="client"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Event Address
            </label>
            <input
              type="text"
              name="clientEventAddress"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Tardeo, Mumbai Central"
            />
          </div>
          {/* this helps us to make sure your event is within our service area */}
          {/* Estimated Budget */}
          <div>
            <label
              htmlFor="clientBudget"
              className="mb-1 block text-md font-medium text-gray-700"
            >
              Estimated Budget
            </label>
            <input
              type="number"
              name="clientBudget"
              className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
              // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="0"
            />
          </div>
          {/* Submit Button */}
          <button
            // type="submit"
            onClick={() => {
              console.log("clicked");
            }}
            className="px-8 py-4 w-1/3 bg-secondary text-dark-secondary font-bold rounded-full  hover:shadow-lg"
          >
            Submit
          </button>
          {/* End */}
        </form>
      </div>
    </section>
  );
}

{
  /* <div className="relative bg-inherit">
  <input
    type="text"
    id="user"
    name="user"
    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
    placeholder="Type inside me"
  />
  <label
    htmlFor="username"
    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
  >
    Type inside me
  </label>
</div>; */
}

{
  /* <div>
  <label
    htmlFor="client"
    className="mb-1 block text-sm font-medium text-gray-700"
  >
    Head
  </label>
  <input
    type="text"
    name="client"
    className=" bg-transparent h-10 w-72 rounded-lg text-para-color placeholder-transparent ring-2 px-2 ring-para-color focus:ring-sky-600 focus:outline-none "
    // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
    placeholder=""
  />
</div>; */
}
