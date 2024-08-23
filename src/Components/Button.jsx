import { BsArrowReturnRight } from "react-icons/bs"

function Button({title = "Get Started"}) {
  return (
    <div className="w-40 px-4 py-2 text-black bg-gray-100 rounded-full flex items-center justify-between">
        <span className="text-sm">{title}</span>
        <BsArrowReturnRight />
    </div>
  )
}
export default Button