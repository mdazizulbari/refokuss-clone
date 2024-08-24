import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Marquees from "./Components/Marquees";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Work from "./Components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full text-white bg-black">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}
export default App;
