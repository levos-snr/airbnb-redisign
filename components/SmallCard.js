/** @format */

import Image from "next/image";
function SmallCard(props) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 hover:scale-105
     transition transform duration-200 ease-out"
    >
      {/* left */}
      <div className="relative h-32 w-32 ">
        <Image src={props.itemprop.img} layout="fill" className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{props.itemprop.location}</h2>
        <h3 className="text-gray-500">{props.itemprop.distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
