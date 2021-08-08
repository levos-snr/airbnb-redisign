/** @format */

import Image from "next/image";
function Banner() {
  return (
    <div
      className="relative h-[470px] sm:h-[450px] md:h-[500px] lg:h-[500px]
        xl:h-[500px] 2xl:h-[600px]"
    >
      <Image src="/airbnb.jpg" layout="fill" objectFit="cover" />
      {/* Banner Text for small screen */}
      <div className="absolute top-1/5  w-full sm:hidden text-center font-bold">
        <p className="text-white w-full  pt-4 text-lg md:text-5xl lg:text-6xl">
          Olympian & Paralympian<br></br>
          Online Experiences
        </p>
        <button
          className="bg-white px-4 py-1 mt-2 shadow-md rounded-lg
        hover:shadow-xl active:scale-90 transition duration-150 font-medium"
        >
          Explore Now
        </button>
      </div>
      {/* Banner Text for lg screen */}
      <div className="absolute top-1/3 pl-10 hidden sm:block xl:pl-20 2xl:pl-70 font-bold">
        <p className="text-white w-full lg:w-full text-3xl   md:text-5xl lg:text-5xl">
          Olympian & <br></br> Paralympian<br></br>
          Online <br></br> Experiences
        </p>
        <button
          className="bg-white px-5 py-1 mt-5  xl:mt-7 
        shadow-md rounded-lg font-medium hover:shadow-xl active:scale-90
        transition duration-150"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
