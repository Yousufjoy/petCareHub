import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="md:flex md:justify-around">
        <div>
          <div className="relative">
            <Image
              className="z-20 relative"
              src="/assets/banner.png"
              width={426}
              height={629}
              alt="No Banner Image Found"
            ></Image>
            <Image
              className="absolute bottom-40 z-10" // Added z-10 here
              src="/assets/bannerBg.png"
              width={426}
              height={629}
              alt="No Banner Image Found"
            ></Image>
          </div>
        </div>
        <div className=" md:max-w-[558px] md:mt-[140px] max-w-[400px] md:text-start text-center ml-[10px] md:ml-[0px]">
          <h1 className="font-fanwood text-primary md:text-[70px] md:text-start text-center text-[40px]">
            Shine Brightly
            <br /> And Be Adorable
          </h1>
          <p className="font-fanwood text-primary md:text-[22px] md:text-start text-center text-[20x]">
            petCareHub is a retail establishment that specializes in the sale of
            animals, pet supplies, and related accessories. These stores
            typically offer a variety of pets, such as dogs, cats, small
            animals, birds, reptiles, and fish, for purchase.
          </p>
          <div className="mt-5">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
