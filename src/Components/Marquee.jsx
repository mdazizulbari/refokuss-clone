import { motion } from "framer-motion";

function Marquee({ imageurls, direction }) {
  return (
    <div className="w-full flex gap-20 overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="py-10 pr-40 flex flex-shrink-0 gap-40"
      >
        {imageurls.map((url, index) => (
          <img src={url} key={index} className="w-28 flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="py-10 pr-40 flex flex-shrink-0 gap-40"
      >
        {imageurls.map((url, index) => (
          <img src={url} key={index} className="w-28 flex-shrink-0" />
        ))}
      </motion.div>
    </div>
  );
}
export default Marquee;
