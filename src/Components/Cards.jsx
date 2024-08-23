import Card from "./Card";

function Cards() {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card width={"basis-1/3"} left={true} right={false} />
        <Card
          width={"basis-2/3"}
          left={false}
          right={true}
          hover={"hover:bg-violet-600"}
        />
      </div>
    </section>
  );
}
export default Cards;
