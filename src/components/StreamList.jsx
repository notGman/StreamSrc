import React from "react";

const getLinks = [
  `https://multiembed.mov/?video_id=`,
  `https://vidsrc.to/embed/movie/`,
  `https://moviesapi.club/movie/`,
  `https://databasegdriveplayer.xyz/player.php?imdb=`,
];

export default function StreamList({ setVideoId }) {
  return (
    <div className="h-[50%] w-[20%] flex flex-col justify-between">
      {getLinks.map((_, index) => (
        <button
          key={index}
          className="py-3 text-center rounded-2xl border-zinc-700 border-2 bg-zinc-900 bg-opacity-75 cursor-pointer hover:scale-[1.03] transition-transform font-medium"
          style={{ fontFamily: "Roboto" }}
          onClick={setVideoId(index)}
        >
          <div className="grid grid-cols-3">
            <i className="fa fa-play-circle-o text-3xl col-span-1 text-zinc-500"></i>
            <div className="col-span-2 text-start my-auto text-zinc-200">Stream {index + 1}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
