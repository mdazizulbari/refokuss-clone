function Work() {
  var images = [
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
  ];
  console.log(images);

  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[30vw] font-medium leading-none tracking-tight select-none">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (element, index) => 
            element.isActive && (
              <img
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
