import Button from "./Button";

function Product({ value, mover, count, bgcolor }) {

  return (
    <section className={`w-full h-[23rem] py-20 text-white ${bgcolor}`}>
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl font-medium">{value.title}</h1>
        <div className="detailes w-1/3">
          <p className="mb-10">{value.description}</p>
          <div className="flex items-center gap-5">
            {value.live && <Button title="Live Website" />}
            {value.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Product;
