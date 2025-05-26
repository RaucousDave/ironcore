import { User, Users, Flame, Apple } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Personal Training",
      desc: "Get one-on-one coaching tailored to your body, your goals, and your lifestyle. Our trainers don’t just count reps—they craft a system that works uniquely for you, and hold you to it.",
      icon: User, // Suggestion: Lucide icon 'user' or 'dumbbell'
    },
    {
      id: 2,
      title: "Group Classes",
      desc: "Experience the energy and accountability of training in small, focused groups. From HIIT to strength circuits, our group classes are designed to push you further together.",
      icon: Users, // Lucide or Heroicons 'users'
    },
    {
      id: 3,
      title: "Body Transformation Program",
      desc: "A 12-week immersive program combining training, meal plans, coaching check-ins, and mindset guidance. Built for those who are serious about next-level results.",
      icon: Flame, // Lucide icon 'flame'
    },
    {
      id: 4,
      title: "Nutrition Coaching",
      desc: "We provide personalized meal strategies based on your fitness goals. Learn to fuel your body the right way without relying on fads or overly expensive supplements.",
      icon: Apple, // Lucide icon 'apple' or 'leaf'
    },
  ];

  return (
    <>
      <section className="bg-neutral-900 py-[4rem] px-6 font-heading text-gray-50">
        <h1 className="text-center font-semibold text-3xl mb-[1.45rem]">
          Our Core Services
        </h1>
        <p className="text-zinc-100 text-center mb-[3.5rem]">
          Whether you're here to bulk, cut, or build lasting discipline—we’ve
          got a path tailored for you. Here’s how IronCore turns potential into
          power:
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.id} className="bg-neutral-800 p-6 rounded-xl">
                <div>
                  <Icon className="font-bold mb-3" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    {service.title}
                  </h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
