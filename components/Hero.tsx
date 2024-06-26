import { FaEye } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="teal" />
      </div>
      <div className="flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            The code artisan
          </h2> */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Dmitrii, a JavaScript developer from Moldova."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg-text-2xl">
            Unleashing the Power of Technology: Node.js, Django, and Beyond
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaEye />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
