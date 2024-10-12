import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 mt-[150px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 relative">
          <Image
            className="w-full max-w-sm mx-auto lg:max-w-full"
            src="/assets/aboutDogImage.png"
            width={426}
            height={629}
            alt="Dog Image"
          />
          <Image
            className="w-full max-w-sm mx-auto lg:max-w-full lg:absolute lg:bottom-[-40px] lg:left-1/4 mt-4 lg:mt-0"
            src="/assets/aboutCatImage.png"
            width={426}
            height={629}
            alt="Cat Image"
          />
        </div>

        <div className="w-full lg:w-2/3 lg:pl-16 xl:pl-24">
          <h1 className="font-fanwood text-primary text-4xl md:text-5xl lg:text-6xl text-center lg:text-left mb-8">
            About Us
          </h1>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-8 lg:gap-16">
            <p className="font-fanwood text-primary text-lg md:text-xl lg:text-2xl text-center md:text-left md:w-1/2">
              At PetCare Hub, we believe in the extraordinary bond between
              humans and their pets. Our passion for animals drives us to create
              a haven where pet lovers can find everything they need to nurture,
              care for, and celebrate their beloved companions.
            </p>
            <p className="font-fanwood text-primary text-lg md:text-xl lg:text-2xl text-center md:text-left md:w-1/2">
              At the heart of PetCare Hub is a commitment to enhancing the
              well-being of every pet that graces our space. We strive to
              provide a one-stop destination for all your pet needs, offering a
              diverse range of high-quality products and services designed to
              promote the health, happiness, and vitality of your furry,
              feathered, or finned friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
