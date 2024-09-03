import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className=" md:flex">
      <div className="md:mt-36 mt-20  md:relative md:w-1/3">
        <Image
          className="" // Added z-10 here
          src="/assets/aboutDogImage.png"
          width={426}
          height={629}
          alt="No Banner Image Found"
        ></Image>
        <Image
          className=" md:absolute md:bottom-[-40px] md:left-[200px]" // Added z-10 here
          src="/assets/aboutCatImage.png"
          width={426}
          height={629}
          alt="No Banner Image Found"
        ></Image>
      </div>

      <div className="md:w-2/3 md:pl-[200px] md:mt-[50px] ">
        <h1 className="font-fanwood text-primary md:text-[70px] md:text-start text-center text-[40px] md:pt-[70px] ">
          About Us
        </h1>
        <div className=" md:flex md:gap-32 ">
          <p className="font-fanwood text-primary md:text-[22px] md:text-start text-center text-[20x] md:w-[314px]">
            At PetCare Hub, we believe in the extraordinary bond between humans
            and their pets. Our passion for animals drives us to create a haven
            where pet lovers can find everything they need to nurture, care for,
            and celebrate their beloved companions.
          </p>
          <p className="font-fanwood text-primary md:text-[22px] md:text-start text-center text-[20x] md:w-[314px]">
            At the heart of PetCare Hub is a commitment to enhancing the
            well-being of every pet that graces our space. We strive to provide
            a one-stop destination for all your pet needs, offering a diverse
            range of high-quality products and services designed to promote the
            health, happiness, and vitality of your furry, feathered, or finned
            friends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
