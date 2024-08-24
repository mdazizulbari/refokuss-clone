import Product from "./Product";

function Products() {
  var products = [
    {
      title: "Cula",
      live: true,
      case: true,
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      title: "Arqitel",
      live: true,
      case: false,
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
    },
    {
      title: "BCG Platinion",
      live: true,
      case: true,
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
    },
    {
      title: "YIR 2021",
      live: true,
      case: false,
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
    },
    {
      title: "YIR 2022",
      live: true,
      case: false,
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    },
    {
      title: "Jungle",
      live: true,
      case: true,
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
    },
    {
      title: "Showcase",
      live: true,
      case: false,
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
    },
  ];

  return (
    <div className="mt-32">
      {products.map((value, index) => (
        <Product value={value} key={index} />
      ))}
    </div>
  );
}
export default Products;
