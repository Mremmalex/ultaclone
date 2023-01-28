import React from "react";
import Image from "next/image";
import DiscoverCard from "@/component/ui/DiscoverCard";
import foundation_one from "@/assets/foundation_one.webp";

// handles the Discover section of the application
function DiscoverSection() {
  return (
    <div className="text-center bg-white">
      <h2 className="text-5xl font-semibold pt-10 pb-3">
        Discover DIOR at Ulta Beauty
      </h2>
      <p className="text-2xl font-serif py-3 pb-5">
        Step into a world celebrating confidence, individual beauty, and
        savoir-faire excellence.
      </p>

      <div className="flex overflow-x-auto md:overflow-hidden px-10">
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </div>

      {/*the today's deals section*/}
      <div className="pt-7 text-start">
        <p className="font-medium text-[27px] pl-[170px] pb-8"> Todays deals</p>
      </div>
      <div className="bg-gray-50 h-[36em] w-[70em] flex items-center pt-[3em] pl-20 ml-[10em]">
        <Image
          src={foundation_one}
          alt="foundation"
          className="w-[400px] h-[400px] pl-[20px]"
        />
        <div className=" flex flex-col items-start pl-[6em] space-y-5">
          <div className="">
            <p className=" font-medium text-sm rounded bg-purple-400">
              Ends Jan 28
            </p>
          </div>
          <p> APP EXCLUSIVE</p>
          <h3 className="text-2xl font-semibold">up to 50% off Complexsion</h3>
          <p className="text-md font-thin">
            Choose from Lencome, Estee Lauder & more
          </p>

          <button className=" text-start py-2  items-center border-b-[2px] border-b-black">
            Download our app
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
