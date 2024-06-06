export default function welcomeBanner() {
  return (
    <section className="py-24 bg-blueGray-950 ">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="mb-6 font-paraFont text-2xl lg:text-3xl text-title-color  mx-auto">
            Welcome to Decor By Buddy
          </h2>
          <p className="mb-20 font-sans font-medium text-para-color text-opacity-60 md:max-w-md mx-auto">
            At Decor By Buddy, we offer unique and creative balloon decorations
            for all occasions in Mumbai. With us, you’ll get hassle-free party
            decorations that will give the WOW factor to your events.
          </p>
          <div className="flex flex-wrap m-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative pt-16 px-10 pb-10 h-full bg-gradient-radial-dark border border-bd-color border-opacity-30 rounded-2xl">
                <div className="relative z-10">
                  <img className="mb-8 mx-auto" src="" alt="" />
                  <h3 className="mb-6 text-xl font-paraFont text-title-color tracking-3xl">
                    Personalized approach
                  </h3>
                  <p className="font-sans text-md text-para-color text-opacity-60">
                    Our goal is to give you a stunningly decorated party without
                    any effort on your part. We provide a personalized approach
                    to each customer because we want nothing but to impress your
                    guests.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative pt-16 px-10 pb-10 h-full bg-gradient-radial-dark border border-bd-color border-opacity-30 rounded-2xl">
                <div className="relative z-10">
                  <img className="mb-8 mx-auto" src="" alt="" />
                  <h3 className="mb-6 text-xl font-paraFont text-title-color tracking-3xl">
                    Custom designs
                  </h3>
                  <p className="font-sans text-md text-para-color text-opacity-60">
                    We also design custom balloon décors for any event,
                    including weddings, birthdays, corporate events,
                    graduations, milestones, baby showers, proposals, bridal
                    showers, and everything in between.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative pt-16 px-10 pb-10 h-full bg-gradient-radial-dark border border-bd-color border-opacity-30 rounded-2xl">
                <div className="relative z-10">
                  <img className="mb-8 mx-auto" src="" alt="" />
                  <h3 className="mb-6 text-xl font-paraFont text-title-color tracking-3xl">
                    Balloons and more!
                  </h3>
                  <p className="font-sans text-md text-para-color text-opacity-60">
                    In addition to our balloon decorations services, we also
                    provide marquee letters, numbers, candy carts, backdrop
                    walls, pedestals, and more! You’ll get a complete setup that
                    complements your stunning balloon décor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
