export default function About() {
  return (
    <>
      <header className="bg-white p-8 pt-32">
        <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
          <div className="row-start-2 lg:row-auto">
            <h3 className="font-semibold font-sans text-title-color">
              Who We Are?
            </h3>
            <h1 className="block antialiased tracking-normal text-dark-secondary font-subFont font-bold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
              Decor By Buddy
            </h1>
            <h2 className="font-semibold font-sans text-title-color text-xl">
              Decor By Buddy provides incredible Balloon Decoration to the
              Mumbai, Maharashtra, India.
            </h2>
            <p className="block antialiased font-sans text-title-color font-normal leading-relaxed text-inherit my-4 !text-gray-500 md:pr-16 xl:pr-28">
              I m Lily Smith, a passionate web developer based in USA. Here, you
              ll get a glimpse of my journey in the world of web development,
              where creativity meets functionality.
            </p>
          </div>
          <img
            alt="team work"
            loading="lazy"
            width="1024"
            height="1024"
            decoding="async"
            data-nimg="1"
            className="h-[36rem] w-full rounded-xl object-cover"
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          />
        </div>
      </header>
    </>
  );
}
