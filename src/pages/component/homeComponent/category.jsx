import Card from "../smallComponent/card.jsx";
import cardData from "../../../data/cardData.jsx";

export default function category() {
  return (
    <section className="py-8 md:py-12 lg:py-24" data-astro-cid-j7pv25f6>
      <div className="max-w-screen-xl w-full mx-auto px-5">
        <div className="text-center" data-astro-cid-j7pv25f6>
          <h2 className="font-paraFont text-2xl lg:tracking-tight">
            Things we do best
          </h2>
          <p className="mx-auto mt-4 max-w-[22ch] text-lg font-sans text-para-color md:max-w-full">
            These are just some of the things we are good at
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 py-8 ">
          <Card details={cardData} />
        </div>
      </div>
    </section>
  );
}
