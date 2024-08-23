import Cards from "./Components/Cards"
import Marquees from "./Components/Marquees"
import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import Stripes from "./Components/Stripes"
import Work from "./Components/Work"

function App() {
  return (
<div className="w-full text-white bg-black">
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
    </div>
  )
}
export default App