function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-gray-500">Socials</h4>
            {["Instagram","Twitter","LinkedIn",].map((item, index)=><a className="mt-2 block text-gray-600">{item} </a>)}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-gray-500">Sitemap</h4>
            {["Home","Work","Careers","Contact"].map((item, index)=><a className="mt-2 block text-gray-400">{item} </a>)}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img className="mt-10" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
