import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      top: "50%",
      left: "50%",
      isActive: false,
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp",
    },
    {
      top: "56%",
      left: "44%",
      isActive: false,
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d84ab75f918dc8617448_YIR%202022%20-4%204.webp",
    },
    {
      top: "45%",
      left: "56%",
      isActive: false,
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d66b3b5bc5130805f1d3_Weglot%20Like%20Magic%20-%204%203.webp",
    },
    {
      top: "59%",
      left: "52%",
      isActive: false,
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6cd0762e6678518b000_Summon%20-%204%203.webp",
    },
    {
      top: "43%",
      left: "40%",
      isActive: false,
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp",
    },
    {
      top: "65%",
      left: "55%",
      isActive: false,
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imageShow(array) {
      setImages((previousState) =>
        previousState.map((item, index) =>
          array.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 3:
        imageShow([0, 1]);
        break;
      case 5:
        imageShow([0, 1, 2]);
        break;
      case 7:
        imageShow([0, 1, 2, 3]);
        break;
      case 9:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 11:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <section className="w-full mt-32">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[30vw] font-medium leading-none tracking-tight select-none">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (element, index) =>
              element.isActive && (
                <img
                  key={index}
                  src={element.url}
                  className="w-80 rounded-xl absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: element.top, left: element.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
export default Work;
