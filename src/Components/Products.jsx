import { useState, useEffect, useRef } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Cula",
      live: true,
      case: true,
      bgcolor: "#3b4656",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      title: "Arqitel",
      live: true,
      case: false,
      bgcolor: "#0f1196",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
    },
    {
      title: "BCG Platinion",
      live: true,
      case: true,
      bgcolor: "#00422c",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
    },
    {
      title: "YIR 2021",
      live: true,
      case: false,
      bgcolor: "#2d2051",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
    },
    {
      title: "YIR 2022",
      live: true,
      case: false,
      bgcolor: "#0d009d",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    },
    {
      title: "Jungle",
      live: true,
      case: true,
      bgcolor: "#0000cc",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
    },
    {
      title: "Showcase",
      live: true,
      case: false,
      bgcolor: "#b12a00",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
    },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay failed:", error));
    }
  }, []);
  const [position, setPosition] = useState(0);
  const mover = (value) => {
    setPosition(value * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((value, index) => (
        <Product value={value} mover={mover} count={index} key={index} bgcolor={value.bgcolor} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="windwo w-[32rem] h-[23rem] absolute left-[44%] rounded-3xl overflow-hidden bg-white"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-100"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-200"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-300"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-400"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2021-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-500"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-600"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/jungle-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-700"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/showcase-43.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default Products;
