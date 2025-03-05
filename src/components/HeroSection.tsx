import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-700">
        Rock Your Music Journey
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Unleash your inner rockstar with our expert-led courses. From shredding guitars to powerhouse vocals, we’ve got everything you need to own the stage!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-blue-600 dark:bg-blue-800 text-white border-blue-300 dark:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Get Started
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button
              borderRadius="1.75rem"
              className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-transform transform hover:scale-105"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
