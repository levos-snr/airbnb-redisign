import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
function InfoCard(props) {
  return (
    <div
      className="flex py-7 px-2  border-b cursor-pointer
    hover:opacity-80 hover:shadow-lg rounded-lg
    transition duration-200 ease-out first:border-t
    "
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-xl"
          src={props.itemprop.img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{props.itemprop.location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>
        <h4 className="text-xl">{props.itemprop.title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {props.itemprop.description}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {props.itemprop.star}
          </p>
          <div>
            <p
              className="text-lg font-semibold
            pb-2"
            >
              {props.itemprop.price}
            </p>
            <p className="text-right font-extralight">{props.itemprop.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
