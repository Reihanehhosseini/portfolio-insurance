import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Button({title , bgColor , color , onClick}) {
  return (
    <div className="flex items-center">
      <button
        type="submit"
        onClick={onClick}
        className={`flex items-center gap-1 rounded-xl bg-${bgColor}  h-11 px-5 text-[12px] text-${color} transition hover:opacity-90 cursor-pointer`}
      >
        {title}
        <IoIosArrowRoundBack size={22} />
      </button>
    </div>
  );
}
