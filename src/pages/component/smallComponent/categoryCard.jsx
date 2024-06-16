import { IoBalloon } from "react-icons/io5";

export default function categoryCard({ name, props }) {
  console.log(props);
  return (
    <div className="relative w-full text-center max-md:max-w-full max-md:mx-auto group ">
      <div className=" rounded-lg flex justify-center items-center mb-4 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
        <IoBalloon className="text-2xl text-dark-secondary" />
      </div>
      <h4 className="text-lg font-medium text-para-color  capitalize">
        {name}
      </h4>
      <p className="text-lg text-para-color">Balloon Decoration</p>
    </div>
  );
}
