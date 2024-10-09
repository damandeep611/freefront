import Image from "next/image";
import heroImg from "../../public/images/working.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 min-h-svh flex items-center">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex self-start">
            <span className="border-2 border-blue-950 bg-blue-300 px-4 py-1 rounded-md text-sm md:text-base">
              Free copy paste component library
            </span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              React and Tailwind UI Library{" "}
              <span className="text-blue-800 block mt-2">
                Framer Motion and GSAP
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 text-base md:text-lg">
              Curated from the Internet, Interactive UI Components, for React,
              Tailwindcss, Framer Motion and GSAP. Feel free to use them -
              Simply copy and paste
            </p>
            <div>
              <button className="border-4 border-blue-900 p-2 px-8 md:px-12 hover:bg-blue-900 hover:text-white transition-colors duration-300">
                View All
              </button>
            </div>
          </div>
        </div>
        {/* Right side image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-square lg:aspect-auto">
            <Image
              src={heroImg}
              alt="Programmer sitting outside castle"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
