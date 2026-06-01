import Image from "next/image";
import { FiFastForward, FiPlay } from "react-icons/fi";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center flex">
        <Image
          src="images/basket.svg"
          alt="Basket"
          width={432}
          height={423}
          className="grayscale absolute left-0 -top-50 -ml-15"
        />

        <div className="relative ml-40 w-full">
          <div className="-mt-30 -ml-25">
            <span className="inline-flex items-center px-6 h-[37px] rounded-[50px] bg-[#FF5F3F1C] text-primary italic">
              Friday Sale, 50%
            </span>
          </div>

          <h1 className="font-extrabold text-[95px] italic leading-[101px] tracking-normal -ml-4 bg-clip-text bg-gradient-to-b from-black to-[#979797] text-transparent -ml-30">
            WEAR YOUR <br />
            TOP-QUALITY <br />
            SPORTSWEAR
          </h1>

          <p className="w-1/2 leading-loose -ml-25">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion
          </p>

          <div className="flex gap-5 mt-14 -ml-25">
            <Button>
              Explore More <FiFastForward />
            </Button>

            <Button variant="ghost">
              Watch Video
              <Image
                src="images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>

        <Image
          src="images/shoes.svg"
          alt="Sport shoes"
          width={700}
          height={950}
          className="absolute right-1 top-44 -translate-y-1/2"
        />
      </div>

      <Image
        src="images/img-ornament-hero.svg"
        alt="Ornament hero"
        width={413}
        height={413}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-auto"
      />
    </section>
  );
};

export default HeroSection;