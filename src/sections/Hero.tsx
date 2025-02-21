import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-blue-800 border border-gray-800 mt-5 px-4 py-1.5 inline-flex items-center rounded-lg">
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>

            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional,
              high-performing web applications. Let's discuss your next project.
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row justify-center">
            <button className="inline-flex items-center gap-2 border-white/10 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>

            <button className="bg-white rounded-xl px-5 py-1">
              <span>👋</span>
              <span className="text-black">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
