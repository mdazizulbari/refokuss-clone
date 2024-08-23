import Navbar from "./Components/Navbar"
import Stripes from "./Components/Stripes"
import Work from "./Components/Work"

function App() {
  return (
<div className="w-full h-screen text-white bg-black">
      <Navbar/>
      <Work/>
      <Stripes/>
    </div>
  )
}
export default App