function miniGallery() {
  return (
    <div className="bg-white h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-xl font-bold font-paraFont text-title-color lg:text-3xl ">
              Gallery
            </h2>

            <p className="hidden  font-sans max-w-screen-sm text-para-color  md:block">
              Check us out on IG!{" "}
              <a
                href=""
                className=" text-dark-secondary font-bold hover:opacity-50"
              >
                {" "}
                @decor_by_buddies
              </a>
            </p>
          </div>

          <a
            href="#"
            className="inline-block rounded-lg border bg-secondary text-dark-secondary px-4 py-2 text-center text-sm font-semibold  outline-none ring-indigo-300 transition duration-100 hover:bg-dark-secondary hover:text-secondary focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/*   {/* image - start   */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://res.cloudinary.com/difvkvxuy/image/upload/v1707317351/DecorbyBuddy/1_Y8TNExmwPUmi8p2X2x37WQ_lbzfjd.jpg"
              loading="lazy"
              alt=" Proposal Suppries"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 font-sans inline-block text-xl text-primary md:ml-5 md:text-lg">
              Birthday Party
            </span>
          </a>
          {/*   {/* image - end   */}

          {/*   {/* image - start   */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://res.cloudinary.com/difvkvxuy/image/upload/v1707317353/DecorbyBuddy/7xm.xyz149707_c0ehid.png"
              loading="lazy"
              alt=" Proposal Suppries"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-primary md:ml-5 md:text-lg">
              Office Party
            </span>
          </a>
          {/* image - end   */}

          {/* image - start   */}

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://res.cloudinary.com/difvkvxuy/image/upload/v1707317359/DecorbyBuddy/Proposal_a2wwre.png"
              loading="lazy"
              alt=" Proposal Suppries"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-primary md:ml-5 md:text-lg">
              Proposal Suppries
            </span>
          </a>
          {/* image - end   */}

          {/* image - start   */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://res.cloudinary.com/difvkvxuy/image/upload/v1707317356/DecorbyBuddy/flower_ring_decoration_ef02s2.jpg"
              loading="lazy"
              alt="Wedding Decoration"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-primary md:ml-5 md:text-lg">
              Wedding Decoration
            </span>
          </a>
          {/* image - end   */}
        </div>
      </div>
    </div>
  );
}

export default miniGallery;
