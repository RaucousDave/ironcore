export default function Hero() {
  return (
    <>
      <section
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero.avif')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="md:text-5xl text-4xl  font-semibold font-heading">
            UNLEASH THE BEAST WITHIN
          </h1>
          <p className="mt-4 text-lg font-medium font-heading">
            Your transformation begins here.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black font-heading  font-medium rounded-sm">
            Join Now
          </button>
        </div>
      </section>
    </>
  );
}
