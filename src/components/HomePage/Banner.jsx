"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center">
      <div className="relative md:w-1/2 w-full max-w-[426px]">
        <Image
          className="z-20 relative"
          src="/assets/banner.png"
          width={426}
          height={629}
          alt="No Banner Image Found"
        />
        <Image
          className="absolute bottom-40 z-10 hidden md:block"
          src="/assets/bannerBg.png"
          width={426}
          height={629}
          alt="No Banner Image Found"
        />
      </div>
      <div className="md:max-w-[558px] md:mt-[140px] max-w-[400px] md:text-start text-center ml-[10px] md:ml-[0px]">
        <h1 className="font-fanwood text-primary md:text-[70px] md:text-start text-center text-[40px]">
          Shine Brightly
          <br /> And Be Adorable
        </h1>
        <p className="font-fanwood text-primary md:text-[22px] md:text-start text-center text-[20px]">
          petCareHub is a retail establishment that specializes in the sale of
          animals, pet supplies, and related accessories. These stores typically
          offer a variety of pets, such as dogs, cats, small animals, birds,
          reptiles, and fish, for purchase.
        </p>
        <div className="mt-5">
          <Link href="/products" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
