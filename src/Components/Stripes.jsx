import Stripe from "./Stripe";

function Stripes() {
  var data = [
    { number: 48, award: "CSSDesignAwards" },
    { number: 2, award: "No-Code conf 2021" },
    { number: 11, award: "awwwards" },
    { number: 48, award: "CSSDesignAwards" },
    { number: 2, award: "No-Code conf 2021" },
    { number: 11, award: "awwwards" },
  ];

  return (
    <div className="h-24 mt-20 flex items-center border-t border-b border-gray-600">
      {data.map((element, index) => (
        <Stripe key={index} value={element} />
      ))}
    </div>
  );
}
export default Stripes;
