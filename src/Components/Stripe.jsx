function Stripe({value}) {
  return (
    <div className="w-[16.66%] px-4 py-9 border-r border-gray-600 flex items-center justify-between">
      <h5 className="font-semibold font-[archivo] tracking-tighter italic text-lg">{value.award}</h5>
      <span className="">{value.number}</span>
    </div>
  )
}
export default Stripe