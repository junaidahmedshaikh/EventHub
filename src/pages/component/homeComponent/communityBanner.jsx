export default function communityBanner() {
  return (
    <div className="bg-white">
      <div className="mx-auto pt-16 sm:px-6 ">
        <div className="relative isolate overflow-hidden  py-24 text-center sm:rounded-3xl ">
          <h2 className=" mx-auto  lg:text-xl uppercase text-title-color font-semibold tracking-wide sm:text-md">
            MAKE YOUR EVENT WITH US
          </h2>
          <p className="mx-auto  mt-6  text-xl lg:text-2xl lg:px-0 text-para-color">
            You Are Just One Call Away from Perfection
          </p>

          <div className=" mt-12 flex items-center justify-center gap-x-6">
            <a
              href="tel:900000000"
              type="button"
              className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-dark-secondary text-primary px-6 py-4 font-semibold  shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Call Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mr-0.5 h-5 w-5"
              >
                <path d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"></path>
              </svg>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="#496a67"

              //   className="bg-biege-secondary"
            ></circle>
            <defs>
              <radialGradient>
                <stop></stop>
                <stop offset="1"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
