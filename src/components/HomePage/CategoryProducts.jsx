import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryProducts() {
  const catFood = "catFood";
  const dogFood = "dogFood";
  const birdFood = "birdFood";

  return (
    <div>
      <div className="">
        <h1 className="font-fanwood text-primary md:text-[60px] md:text-center text-center text-[40px] md:py-[80px] ">
          Shop By Pet
        </h1>

        <div className="md:flex md:justify-around md:ml-[0px] ml-[100px] mt-5 ">
          <Link href={`/category/${catFood}`}>
            <Image
              src="/assets/categoryCat.png"
              height={250}
              width={250}
              alt="Cat Food"
            />
          </Link>
          <Link href={`/category/${dogFood}`}>
            <Image
              src="/assets/categoryDog.png"
              height={250}
              width={250}
              alt="Dog Food"
            />
          </Link>
          <Link href={`/category/${birdFood}`}>
            <Image
              src="/assets/categoryBird.png"
              height={250}
              width={250}
              alt="Bird Food"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;