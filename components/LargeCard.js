import Image from "next/image";
function LargeCard(props) {
  return (
    <section className="relative py-14 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={props.img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl "
        />
      </div>
      <div
        className={
          props.id == 2
            ? "text-white absolute sm:top-60 sm:left-4  top-32  md:top-44 left-12 lg:left-20"
            : "text-black absolute top-24 md:top-44 sm:top-20 left-12 lg:left-32"
        }
      >
        <h3 className="font-semibold text-3xl w-56 sm:w-68 md:w-60 lg:text-3xl lg:w-56">
          {props.title}
        </h3>
        {props.id == 2 ? (
          <h3 className="text-l w-56 py-2 text-justify pb-3">{props.desc}</h3>
        ) : (
          ""
        )}
        <button
          className={
            props.id == 2
              ? "bg-white px-4 py-2 mt-2 text-black rounded-lg hover:shadow-xl active:scale-90 transition duration-150"
              : "bg-gray-900 px-4 py-2 mt-2 text-white rounded-lg hover:shadow-xl active:scale-90 transition duration-150"
          }
        >
          {props.btn}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
