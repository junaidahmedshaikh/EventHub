// import React from 'react'

export default function miniContect() {
  return (
    <section className="bg-primary  md:pt-12 lg:pt-24">
      <div className="bg-tertiary  w-full mx-auto px-10 py-10">
        <div className="flex flex-col justify-center place-items-center px-10 gap-8 md:grid lg:grid-cols-2">
          <div className="text-biege-secondary">
            <h2 className="font-futura text-4xl lg:tracking-tight">
              Contact us
            </h2>
            <p className="opacity-60 mb-10 mt-3 text-lg leading-relaxed text-neutral">
              Select from various convenient methods to place your order. Reach
              out to us via email or phone call, or simply fill out the form
              here to share details about your upcoming event.
            </p>{" "}
            <a
              href="/getQuote"
              className="border border-biege-secondary p-5 rounded-md mt-10 hover:bg-biege-secondary hover:text-tertiary"
            >
              Get a quote
            </a>{" "}
          </div>{" "}
          <img
            src="https://res.cloudinary.com/difvkvxuy/image/upload/v1716709811/DecorbyBuddy/xxpqpmdlhzvbg5611cr5.jpg"
            className="aspect-[3/2] w-full max-w-md rounded-lg object-cover md:aspect-auto max-lg:hidden"
            alt="Contact us"
            width="1660"
            height="1660"
            loading="lazy"
            border="10px"
            decoding="async"
          />{" "}
        </div>
      </div>
    </section>
  );
}
