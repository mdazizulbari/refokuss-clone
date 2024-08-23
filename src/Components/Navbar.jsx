import Button from "./Button";

function Navbar() {
  return (
    <nav className="max-w-screen-xl mx-auto py-6 border-b-gray-600 border-b flex items-center justify-between">
      <div className="navLeft flex items-center">

      <div className="img w-28 h-8 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.popsy.co/images/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fassets-global.website-files.com%252F6024cb0edb66de5e830d3665%252F60343177940d0b566d3991b7_og.png%3Ftable%3Dblock%26id%3Db2e7d1d1-485c-4f4b-bcfc-857e10e196f3%26cache%3Dv2?width=1500&optimizer=image"
          alt=""
        />
      </div>
      <div className="links ml-20 flex gap-14">
        {["Home", "Work", "Culture", "", "News"].map((element, index) =>
          element.length === 0 ? (
            <span className="w-0.5 h-7 bg-gray-600"></span>
          ) : (
            <a href="#" className="text-sm flex items-center gap-1">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="w-1 h-1 inline-block rounded-full bg-green-500"
                ></span>
              )}
              {element}
            </a>
          )
        )}
      </div>
      </div>
      <Button/>
    </nav>
  );
}
export default Navbar;
