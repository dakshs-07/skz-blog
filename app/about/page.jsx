import Image from "next/image";
import React from "react";

const ImageHover = "hover:rotate-3 cursor-pointer";
function page() {
  return (
    <div className="my-10 mx-50">
      <div className="flex mt-5">
        <div className="p-2 flex flex-col justify-center">
          <Image
            src="/assets/do-it.jpg"
            alt="img1"
            width={600}
            height={600}
            className={`${ImageHover} rotate-6`}
          />
          <Image
            src="/assets/skz-2.jpg"
            alt="img1"
            width={600}
            height={600}
            className={`${ImageHover} -rotate-12`}
          />
          <Image
            src="/assets/skz-3.jpg"
            alt="img1"
            width={600}
            height={600}
            className={`${ImageHover} rotate-8`}
          />
        </div>
        <div className="flex flex-col justify-center mx-2 text-lg text-center gap-5">
          <h1 className="text-5xl text-center tracking-wide">ABOUT</h1>
          <p className="text-gray-500 italic text-center mb-10">
            Stray Kids everywhere around the worlddd!!!!
          </p>

          <p>Find Stray Kids tea and details all in one place!</p>

          <p>
            No matter who you stan or what songs you put on repeat until you
            squeeze the emotion out of it, this is the place to yap and see what
            others are yapping about!
          </p>
        </div>
        <div className="p-2 flex flex-col justify-center">
          <Image
            src="/assets/lee-know.jpg"
            alt="img1"
            width={600}
            height={600}
            className={`${ImageHover} -rotate-6`}
          />
          <Image
            src="/assets/maniac.jpg"
            alt="img1"
            width={600}
            height={600}
            className={`${ImageHover} rotate-12`}
          />
          <Image
            src="/assets/skz-2.jpg"
            alt="img1"
            width={600}
            height={600}
            className={`${ImageHover} -rotate-8`}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
