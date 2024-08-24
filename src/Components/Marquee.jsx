function Marquee({ imageurls }) {
  return (
    <div className="w-full py-8 flex gap-20 whitespace-nowrap overflow-hidden">
      {imageurls.map((url, index) => (
        <img src={url} key={index} className="w-28 flex-shrink-0" />
      ))}
      {imageurls.map((url, index) => (
        <img src={url} key={index} className="w-28 flex-shrink-0" />
      ))}
    </div>
  );
}
export default Marquee;
