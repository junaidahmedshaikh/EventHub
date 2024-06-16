import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";

export default function feature() {
  return (
    <section className="py-12 bg-secondary  lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
        <div className=" mx-auto text-center xl:max-w-4xl">
          <h2 className="text-dark-secondary text-2xl font-paraFont font-bold leading-tight text-gray-50 sm:text-3xl  mb-6">
            Why choose us as your balloon decorators?
          </h2>
          <p className="text-dark-secondary font-sans font-medium opacity-60 mb-4">
            Choosing us as your balloon decorators ensures an experience that
            goes beyond just adding balloons to your event. We bring creativity,
            expertise, and dedication to every occasion, turning ordinary spaces
            into extraordinary showcases of celebration.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border bg-primary text-gray-600 border-title-color sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-para-color0">
            <div className="relative space-y-8 py-12 p-8">
              <TbCircleNumber1 className="text-3xl text-title-color" />
              <div className="space-y-2">
                <h5 className="text-title-color font-paraFont text-xl font-semibold text-white transition">
                  Stunning balloons with the best price
                </h5>
                <p className="text-para-color font-sans font-medium">
                  We offer the best price for the most amazing balloons West
                  Palm Beach has to offer. We can also decorate your event
                  within your budget!
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <TbCircleNumber2 className="text-3xl text-title-color" />
              <div className="space-y-2">
                <h5 className="text-title-color font-paraFont text-xl font-semibold text-white transition ">
                  Free design consultation
                </h5>
                <p className="text-para-color font-sans font-medium">
                  Get a free design consultation to see how our balloon decors
                  can elevate the ambiance of your next event.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <TbCircleNumber3 className="text-3xl text-title-color" />
              <div className="space-y-2">
                <h5 className="text-title-color font-paraFont text-xl font-semibold text-white transition ">
                  Wide variety of designs and inventory
                </h5>
                <p className="text-para-color font-sans font-medium">
                  Get balloon event decor for all occasions {"–"} perfect as
                  décor or a gift. We carry almost every balloon color, size,
                  and shape you need.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <TbCircleNumber4 className="text-3xl text-title-color" />
              <div className="space-y-2">
                <h5 className="text-title-color font-paraFont text-xl font-semibold text-white transition ">
                  Individual approach for each customer
                </h5>
                <p className="text-para-color font-sans font-medium">
                  All our exclusive balloon décor is personalized to wow your
                  guests. We can customize each balloon with your preferred
                  print and design at a competitive price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
