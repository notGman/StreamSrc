import React, { useEffect, useRef, useState } from "react";
import MovieWrapper from "./components/MovieWrapper";

export default function App() {
  const wrapperRef = useRef();
  const [showMovieWrapper, setShowMovieWrapper] = useState(true);
  const [url, setUrl] = useState("");
  const iframeRef = useRef();
  const ServerBtn = useRef();

  console.log(url);

  useEffect(() => {
    if (url) showAnimation();
  }, [url]);

  const removeEmbedUrl = () => {
    iframeRef.current.src = "";
  };

  const showAnimation = () => {
    setShowMovieWrapper(!showMovieWrapper);
    wrapperRef.current.classList.toggle("-translate-y-[100%]");
    ServerBtn.current.classList.toggle("hidden");
  };

  const handleClick = () => {
    showAnimation();
    removeEmbedUrl();
  };

  return (
    <>
      <div className="relative">
        <button ref={ServerBtn} onClick={handleClick} className="fixed hidden left-1/2 -translate-x-1/2 w-28 bg-black text-white py-2 font-bold rounded-b-3xl z-10">
          {showMovieWrapper ? "▲" : "▼"}
        </button>

        <div ref={wrapperRef} id="wrapper" className="absolute w-screen transition-transform duration-500">
          <MovieWrapper setUrl={setUrl} />
        </div>

        <div className="text-black">{url && <iframe ref={iframeRef} src={url} allowFullScreen frameBorder="0" className="w-full h-screen"></iframe>}</div>
      </div>
    </>
  );
}
