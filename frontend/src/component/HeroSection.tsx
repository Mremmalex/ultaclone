import React from "react";
import hero_image from "src/assets/hero_image.webp";

type Props = {};
function HeroSection(props: Props) {
  return (
    <div className="bg-no-repeat md:bg-contain bg-[url('../assets/hero_image.webp')] md:h-[670px] space-y-2">
      <div className="flex flex-col justify-center pl-[10em] pt-[16em] space-y-4">
        <p className="font-semibold">NOW AT ULTA BEAUTY</p>
        <h2 className="font-semibold text-7xl">DIOR</h2>
        <p className="w-[22em] font-serif text-xl">
          Experience the couture makeup and skin care icons and rediscover your
          fragrance favorites.
        </p>
        <h3 className="text-2xl font-semibold">Shop Now -&gt;</h3>
      </div>
    </div>
  );
}

export default HeroSection;
