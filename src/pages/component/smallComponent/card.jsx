// import cardData from "./cardData/cardData.jsx";

export default function card(props) {
  // console.log(props.details.value);
  return (
    <>
      {props.details.map((value, index) => (
        <div
          key={index}
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={value.imageSource} alt={value.titleOfCard} />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-title-color">
              {value.titleOfCard}
            </h5>
            <p className="block font-sans font-normal text-base text-para-color antialiased  leading-relaxed text-inherit">
              {value.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-secondary text-dark-secondary shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
