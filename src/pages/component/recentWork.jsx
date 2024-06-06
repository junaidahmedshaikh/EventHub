import jsDelivr from "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js";

export default function recentWork() {
  let currentImage;
  const myFun = () => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        currentImage = null;
      }
    });
  };
  return (
    <section className="bg-white">
      <div className="w-full mx-auto max-w-xl flex flex-col lg:h-svh justify-center py-24 lg:py-96 relative p-8">
        <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
          <div>
            <h1>Image gallery</h1>
            <p className="text-balance">
              Click on the image to view it in full screen and click outside the
              image or press ESC to close it.
            </p>
          </div>
        </div>
        <div className="mt-6 border-t pt-12">
          {/* Start component  */}
          <div data={{ currentImage: null }} xInit={myFun}>
            <div className="grid grid-cols-3 gap-4">
              <div
                onClick={
                  (currentImage =
                    "https://i.pinimg.com/564x/59/41/a0/5941a02c048f6226031a0487451c2651.jpg")
                }
                className="cursor-pointer"
              >
                {" "}
                <img
                  src="https://i.pinimg.com/564x/59/41/a0/5941a02c048f6226031a0487451c2651.jpg"
                  alt="Image 1"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />{" "}
              </div>
              <div
                onClick={
                  (currentImage =
                    "https://i.pinimg.com/736x/70/25/f6/7025f63ebdd1caa11b47889c4c4d8fcd.jpg")
                }
                className="cursor-pointer"
              >
                {" "}
                <img
                  src="https://i.pinimg.com/736x/70/25/f6/7025f63ebdd1caa11b47889c4c4d8fcd.jpg"
                  alt="Image 2"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />{" "}
              </div>
              <div
                onClick={
                  (currentImage =
                    "https://i.pinimg.com/564x/4e/a7/ff/4ea7ff230ad9f3bc1c30b1b6cbaccad3.jpg")
                }
                className="cursor-pointer"
              >
                {" "}
                <img
                  src="https://i.pinimg.com/564x/4e/a7/ff/4ea7ff230ad9f3bc1c30b1b6cbaccad3.jpg"
                  alt="Image 3"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />{" "}
              </div>
            </div>

            <div
              xShow={currentImage}
              className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-80 transition-opacity duration-300"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              style="display: none;"
            >
              <div
                clickAway={(currentImage = null)}
                className="max-w-full max-h-full overflow-auto py-12"
                tabIndex="-1"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <div className="prose text-gray-500 mx-auto prose-sm prose-headings:font-normal prose-headings:text-xl">
                  <div className="text-center max-w-sm mx-auto">
                    <h1>The modal</h1>
                    <p className="text-balance">
                      To close the modal, click outside the modal, press ESC, or
                      click the close button.
                    </p>
                  </div>
                </div>{" "}
                <button
                  onClick={(currentImage = null)}
                  className="rounded-full bg-orange-600 px-8 py-2 h-12 text-sm font-semibold flex items-center
              text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 justify-center mx-auto w-auto
              focus:ring-offset-2"
                >
                  Close
                </button>{" "}
                <img
                  src="currentImage"
                  alt="Full Size Image"
                  className="max-w-full max-h-full mx-auto mt-12"
                />
              </div>
            </div>
          </div>
          {/* Ends component */}
          <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2">
            <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
              <div className="flex w-0 flex-1 items-center p-4">
                <div className="w-full">
                  <p className="text-sm font-medium text-neutral-900">
                    Tutorial
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    How to create a image gallery with Tailwind CSS and Alpinejs
                  </p>
                  <p className="mt-2 text-xs text-orange-500 underline">
                    {" "}
                    <a href="https://lexingtonthemes.com">
                      by © Lexington Themes
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-neutral-200">
                  <div className="flex h-0 flex-1">
                    {" "}
                    <a
                      href="https://lexingtonthemes.com/tutorials/how-to-create-a-image-gallery-with-tailwind-css-and-alpinejs"
                      type="button"
                      className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Tutorial
                    </a>{" "}
                  </div>
                  <div className="flex h-0 flex-1">
                    {" "}
                    <a
                      href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/image-gallery/index.astro"
                      className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Get the code
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
