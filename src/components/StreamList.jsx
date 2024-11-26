import React, { useEffect, useState } from "react";
import { Providers } from "../utils/Providers";

export default function StreamList({ providers, setLink, id, season, episode }) {
  const [selectedLink, setSelectedLink] = useState(0);

  useEffect(() => {
    let provider = Providers[selectedLink].replace("ID", id);
    setLink(provider);
  }, [selectedLink]);

  return (
    <div className="h-fit min-w-[18em] flex flex-col justify-between gap-y-3">
      {providers?.map((el, index) => (
        <button
          key={index}
          className={`py-3 text-center rounded-2xl border-2 cursor-pointer transition-transform duration-200 font-medium shadow-md backdrop-filter backdrop-blur-lg ${
            selectedLink === index
              ? "border-blue-600 bg-zinc-800/50 scale-[1.01] shadow-blue-600/50 text-blue-400"
              : "border-zinc-700 bg-zinc-900/30 hover:bg-zinc-800/40 hover:scale-[1.03] text-zinc-300"
          }`}
          style={{ fontFamily: "Roboto" }}
          onClick={() => setSelectedLink(index)}
        >
          <div className="grid grid-cols-3">
            <i className={`fa fa-play-circle-o text-3xl col-span-1 my-auto ${selectedLink === index ? "text-blue-500" : "text-zinc-500"}`}></i>
            <div className="col-span-2 text-start my-auto">
              <div>Server {index + 1}</div>
              <div className="text-sm text-zinc-500">{new URL(el).hostname.split(".")[0]}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
