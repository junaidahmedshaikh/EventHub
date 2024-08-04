import GallerySection from "./component/smallComponent/gallerySection";
export default function Gallery() {
  const imageSrc = [
    "https://haplun.in/uploads/product_images/large/1681906118_7860220833.webp",
    "https://thejarvi.com/wp-content/uploads/2023/01/ani0005.jpg",
    "https://specialyou.in/cdn/shop/files/71WYwM_zt7L._SL1500.jpg?v=1690201555&width=2048",
    "https://5.imimg.com/data5/QH/WG/NB/SELLER-50583371/o1cn01yfacfp2558lpsv3p3-740537474-500x500.jpg",
    "https://indiaflorist247.com/cdn/shop/products/Birthday-Decoration-Service---Any-Number---Birthday-balloon-decoration---1st_-2nd_-16th_-21st_-30th_-60th-Indiaflorist247-1661938323.jpg?v=1661938325",
    "https://cdn.togetherv.com/heart-themed-white-balloons-wall-decoration-main_1701346076.webp",
  ];
  return (
    <section className="pt-32 px-32 max-md:px-20 max-sm:px-5">
      <div className="flex flex-col justify-center items-center py-20 px-32 my-5 border rounded border-dark-secondary bg-secondary max-md:px-20 max-sm:px-5">
        <h1 className="text-3xl font-paraFont font-bold my-1 text-dark-secondary">
          Gallery
        </h1>
        <span className="font-semibold font-sans text-md text-dark-secondary opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciundarkt
          repellendus iure voluptatem deserunt, ipsa earum incidunt, cumque
          dicta accusantium numquam eum. Natus voluptate sit ad voluptatem
          pariatur. Nulla, modi cumque!
        </span>
      </div>
      <div className="pb-5 flex flex-col">
        <GallerySection imageSrc={imageSrc} />
        {/* <GallerySection imageSrc={imageSrc} /> */}
      </div>
    </section>
  );
}
