import React from "react";
import Image from "next/image";
import hero_mobile_image from "src/assets/hero_mobile_image.webp";

type Props = {};

function HeroSection(props: Props) {
  return (
    <div className="bg-no-repeat lg:bg-cover lg:bg-[url('../assets/hero_image.webp')] lg:h-[670px] space-y-2 overflow-hidden">
      <div className="flex lg:hidden">
        <Image src={hero_mobile_image} alt="hero image mobile" />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start h-[30em] lg:h-[0em] bg-white lg:bg-inherit lg:pl-[10em] lg:pt-[20em] space-y-4">
        <p className="font-semibold">NOW AT ULTA BEAUTY</p>
        <h2 className="font-semibold text-7xl">DIOR</h2>
        <p className="lg:w-[22em]  font-serif text-[18px] lg:text-xl text-center lg:text-start">
          Experience the couture makeup and skin care icons and rediscover your
          fragrance favorites.
        </p>
        <h3 className="text-2xl font-semibold">Shop Now -&gt;</h3>
      </div>
    </div>
  );
}

export default HeroSection;
