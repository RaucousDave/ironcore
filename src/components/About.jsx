export default function About() {
  const texts = [
    {
      id: 1,
      title: "Strength Beyond Muscle",
      desc: "At IronCore, we're not just stacking weights—we're forging discipline, character, and grit. Our mission is simple: transform ordinary individuals into their strongest, most resilient selves—physically and mentally.",
      image: "/images/weights.jpeg",
    },
    {
      id: 2,
      title: "Everyone Has a Starting Point",
      desc: "Whether you're stepping into a gym for the first time or you're a seasoned athlete chasing the next level, we meet you exactly where you are—and push you forward with support, challenge, and a relentless standard.",
      image: "/images/about-us(1).jpeg",
    },
    {
      id: 3,
      title: "This Is More Than a Gym",
      desc: "From cutting-edge equipment to elite coaches and a culture of intensity, we’ve built more than a workout space—we’ve built a brotherhood. IronCore is a mindset, a forge. Join us and turn pressure into power.",
      image: "/images/about-us.jpeg",
    },
  ];

  return (
    <>
      <section className="py-[4rem] bg-gray-50 text-zinc-900 font-heading  px-4">
        <h1 className="md:text-4xl font-semibold text-3xl text-center mb-[1.45rem]">
          About Us{" "}
        </h1>
        <p className="text-center mb-[3.5rem]">
          We're more than just a gym. We're where strength meets discipline
        </p>

        <div className="flex flex-col  p-3 md:p-6">
          {texts.map((text) => (
            <div
              key={text.id}
              className={`flex flex-col md:flex-row gap-4 md:gap-6 mb-14 md:mb-16 ${
                text.id % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-[60%]">
                <h1 className="font-medium mb-4 text-3xl">{text.title}</h1>
                <p className="">{text.desc}</p>
              </div>
              <div className="md:w-[50%] h-[250px] overflow-hidden ">
                <img
                  src={text.image}
                  className="rounded-lg w-full h-auto object-cover"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
