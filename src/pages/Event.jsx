import CategoryCard from "./component/smallComponent/categoryCard";
import Feature from "./component/homeComponent/feature";
export default function Event() {
  const nameOfCategory = [
    "Corporate",
    "Birthday",
    "Wedding",
    "School Event",
    "Hospitality",
    "Indoor",
    "Outdoor",
    "More",
  ];
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="py-20">
          <a href="/home" className="flex justify-center ">
            <img
              className="h-8 w-auto md:h-32"
              alt=""
              width="88"
              height="48"
              src="https://res.cloudinary.com/difvkvxuy/image/upload/c_crop,w_330,h_300/v1716712923/DecorbyBuddy/dbblogowithoutbg.png"
            />
          </a>
          <div className="py-8 text-center">
            <h3 className="font-manrope text-2xl text-gray-900 font-bold mb-4">
              HIRE THE BEST MUMBAI BALLOON DECORATORS AND MASTER MAGICIANS
              TODAY!
            </h3>
            <p className="text-gray-500">
              {` Elevate your event with Buddy Balloon Decor! We're Mumbai's
              official balloon artists, ready to make your event unforgettable!`}
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a href="/getQuote">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-secondary text-dark-secondary shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Get a quote
              </button>
            </a>
          </div>
        </div> */}
        <div className="pt-20">
          <a href="/home" className="flex justify-center ">
            <img
              className="h-8 w-auto md:h-32"
              alt=""
              width="88"
              height="48"
              src="https://res.cloudinary.com/difvkvxuy/image/upload/c_crop,w_330,h_300/v1716712923/DecorbyBuddy/dbblogowithoutbg.png"
            />
          </a>
        </div>
        {/* End Section */}
        <div className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="py-1 px-4  rounded-full text-xl font-medium text-dark-secondary text-center">
                We Do It All
              </span>
              <h2 className="text-2xl text-center font-bold text-title-color pb-5">
                Corporate Events, Outdoor Balloon Decor and Home Decoration
              </h2>
              <p className="text-lg font-normal text-para-color max-w-md md:max-w-2xl mx-auto">
                {`We can help make your event a success whether you're looking for
                something simple or extravagant! `}
              </p>
            </div>
            <div className=" justify-center items-center flex gap-x-5 gap-y-8 lg:gap-y-0   md:flex-wrap lg:grid grid-cols-4 lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              {nameOfCategory.map((name) => {
                return <CategoryCard props={name} key={Math.random() * 100} />;
              })}
            </div>
          </div>
        </div>
        {/* End Section */}
        <div className="py-5">
          <Feature />
        </div>
      </div>
    </div>
  );
}
