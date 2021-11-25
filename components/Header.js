/** @format */

import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

function Header(props) {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const handleSelect = (ranges) => {
    console.log(ranges);
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const resetInput = () => {
    setsearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 
        bg-white shadow-md shadow-md
        p-2 md:px-5  "
    >
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer
        my-auto "
      >
        <Image
          src="https://raw.githubusercontent.com/Vishnu-es/images/main/Airbnb_Logo_B%C3%A9lo.svg.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div
        className=" flex items-center md:border-2 rounded-full
         pY-2 md:shadow-sm "
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          placeholder={props.placeholder || "Start your search"}
          className="flex-grow pl-5 bg-transparent outline-none text-sm 
            text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white 
            rounded-full p-2 cursor-pointer md:mx-2 
            hover:shadow-xl active:scale-90 transition duration-150"
        />
      </div>

      {/* Right */}
      <div
        className="flex items-center space-x-4 justify-end justify-end
        text-gray-500"
      >
        <p className="hidden md:inline cursor-pointer pl-1">Become a host</p>
        <GlobeAltIcon className="hidden sm:block h-6 hover:animate-spin" />
        <div
          className="flex items-center space-x-2 border-2
            p-2 rounded-full cursor-pointer"
        >
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div
          className="flex flex-col col-span-3
        mx-auto mt-3"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex border-b mb-5 items-center">
            <h2
              className="text-2xl flex-grow
            font-semibold"
            >
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg 
            outline-none  text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-red-400">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-gray-500">
              Search ...
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
