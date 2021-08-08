import Image from "next/image";
function MediumCard(props) {
  return (
    <div
      className="cursor-pointer hover:scale-105 
     transform transition duration-300 ease-out text-start "
    >
      <div className="relative  h-80 w-80 p-5">
        <Image src={props.itemprop.img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-2xl font-normal mt-3 ">{props.itemprop.title}</h3>
    </div>
  );
}

export default MediumCard;
