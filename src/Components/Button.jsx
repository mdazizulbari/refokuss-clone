import { BsArrowReturnRight } from "react-icons/bs"

function Button() {
  return (
    <div className="min-w-40 px-4 py-2 text-black bg-gray-100 rounded-full flex items-center justify-between">
        <span className="text-sm">Get Started</span>
        <BsArrowReturnRight />
    </div>
  )
}
export default Button