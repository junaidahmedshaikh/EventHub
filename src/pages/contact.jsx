export default function contact() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center gap-4 inline-flex">
          <h2 className="text-center text-dark-secondary text-3xl font-bold font-manrope leading-normal">
            Contact Us
          </h2>
          <p className="text-center text-para-color text-base font-normal leading-relaxed">
            In order to get the most accurate quote please fill out the contact
            form and provide as many details as possible
          </p>
        </div>

        <div className="lg:my-14 my-8 grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
            <h4 className="text-gray-900 text-xl font-semibold leading-8">
              Basic Information
            </h4>
            {/* Form start */}
            <form className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor="name"
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Full Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="Junaid Shaikh"
                />
              </div>
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="phone"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Phone No
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </label>
                  <input
                    type="phone"
                    id={"phone"}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="9000000000"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="email"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="admin@gmail.com"
                  />
                </div>
              </div>
              {/* Second Section */}
              <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  Event Informatiom
                </h4>
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor=""
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        What is the occasion?
                      </label>
                      {/* <span className="relative top-11 left-5" onClick={"none"}>
                        Select an Option
                      </span> */}
                      <select
                        name="event"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                        placeholder="Select an Option"
                      >
                        {" "}
                        <option value="">Select an Option</option>
                        <option value="Birthday">Birthday </option>
                        <option value="Baby Shower">Baby Shower</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Gender Reveal">Gender Reveal</option>
                        <option value="Bridal Shower">Bridal Shower</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor="budget"
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        Estimated Budget
                      </label>
                      <input
                        type="number"
                        id="budget"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor="projectDate"
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        Project date
                      </label>
                      <input
                        type="date"
                        id="projectDate"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                        placeholder="Smith"
                      />
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor="eventStart"
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        Event Start Time?
                      </label>
                      <input
                        type="time"
                        id="eventStart"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                        placeholder="John"
                      />
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor="eventEnd"
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        Event End Time?
                      </label>
                      <input
                        type="time"
                        id="eventEnd"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label
                      htmlFor=""
                      className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                    >
                      Event Address
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                      >
                        <path
                          d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                          fill="#EF4444"
                        />
                      </svg>
                    </label>
                    <input
                      type="text"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                      placeholder="Tardeo, Mumbai Center"
                    />
                  </div>
                </div>
              </div>
              <button
                className=" rounded-lg bg-dark-secondary py-3.5 px-7 text-center align-middle font-sans text-md font-bold uppercase text-secondary shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Submit
              </button>
            </form>
            {/* Form end */}
          </div>
          {/* <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
            <h4 className="text-gray-900 text-xl font-semibold leading-8">
              Event Informatiom
            </h4>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  What is the occasion?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="Birthday Party"
                />
              </div>

              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="eventStart"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    What time does your event start?
                  </label>
                  <input
                    type="time"
                    id="eventStart"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="eventEnd"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    What time does your event end?
                  </label>
                  <input
                    type="time"
                    id="eventEnd"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="Smith"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="projectDate"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Project date
                  </label>
                  <input
                    type="date"
                    id="projectDate"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Event Address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="Tardeo, Mumbai Center"
                />
              </div>
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    County
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full bg-secondary">
            <img
              src="https://res.cloudinary.com/difvkvxuy/image/upload/v1718271734/DecorbyBuddy/Balloons-bro_g5evjd.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
