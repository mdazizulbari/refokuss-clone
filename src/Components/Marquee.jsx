function Marquee({ imageurls }) {
  return (
    <div className="w-full py-8 flex gap-20 whitespace-nowrap overflow-hidden">
      {imageurls.map((url) => (
        <img src={url} className="w-28 flex-shrink-0" />
      ))}
      {imageurls.map((url) => (
        <img src={url} className="w-28 flex-shrink-0" />
      ))}
    </div>
  );
}
export default Marquee;
