import React from "react";

export default function WrapperBtn({ showMovieWrapper, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`fixed z-[10] left-1/2 -translate-x-1/2 w-28 bg-black/50 text-white py-2 font-bold rounded-b-3xl transition-all duration-200 group-hover:block hidden ${
        showMovieWrapper ? "text-blue-500" : "text-white"
      } hover:bg-black/80`}
    >
      {showMovieWrapper ? "▲" : "▼"}
    </button>
  );
}
