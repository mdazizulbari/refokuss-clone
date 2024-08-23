import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, left, right, hover, h4, h5 }) {
  return (
    <div
      className={`${width} p-5 rounded-xl bg-gray-700 min-h-[30rem] flex flex-col justify-between ${hover}`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h5>{h5}</h5>
          <IoIosArrowRoundForward />
        </div>
        <h4 className="mt-5 text-3xl font-medium">{h4}</h4>
      </div>
      <div className="down w-full">
        {left && (
          <p className="text-sm font-medium text-gray-400">
            Web Design, Webflow Development, and Creative Development.
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
