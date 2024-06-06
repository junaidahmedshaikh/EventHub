export default function gallerySection({ imageSrc }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* First Col */}
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[0]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[1]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[2]}
            alt=""
          />
        </div>
      </div>
      {/* Second Col */}
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[3]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[4]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[5]}
            alt=""
          />
        </div>
      </div>
      {/* Third Col */}
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[0]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[1]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[2]}
            alt=""
          />
        </div>
      </div>
      {/* Four Col */}
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[3]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[4]}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSrc[5]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
