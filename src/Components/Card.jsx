import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, left, right, hover }) {
  return (
    <div
      className={`${width} p-5 rounded-xl bg-gray-700 min-h-[30rem] flex flex-col justify-between ${hover}`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h2 className="mt-5 text-3xl font-medium">Whatever Heading</h2>
      </div>
      <div className="down w-full">
        {left && (
          <p className="text-sm font-medium text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        )}
        {right && (
          <>
            <h1 className="text-6xl tracking-tighter leading-none font-semibold">
              Start a Project
            </h1>
            <button className="mt-5 px-5 py-2 rounded-full border-gray-50 border">
              Contact Us
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default Card;
