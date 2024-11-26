import React, { useEffect, useRef, useState } from "react";
import MovieWrapper from "./components/MovieWrapper";
import WrapperBtn from "./components/WrapperBtn";
import useSearch from "./hooks/UseSearch";
import StreamList from "./components/StreamList";
import { Providers } from "./utils/Providers";
import { useParams } from "react-router";
import Player from "./components/Player";
import Loader from "./components/Loader";

export default function App() {
  const [showMovieWrapper, setShowMovieWrapper] = useState(true);
  const [link, setLink] = useState("");
  const iframeRef = useRef();
  const { data, loading, error } = useSearch();
  const { id } = useParams();

  const handleWrapperBtn = () => {
    setShowMovieWrapper(!showMovieWrapper);
    iframeRef.current.src = "";
  };

  useEffect(() => {
    setShowMovieWrapper(!showMovieWrapper);
    if (data?.results) document.title = "Streaming: " +data?.results[0].title;
  }, [link]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="group relative">
      <WrapperBtn handleClick={handleWrapperBtn} showMovieWrapper={showMovieWrapper} />

      <MovieWrapper backdrop={data?.results[0]} show={showMovieWrapper}>
        <div className="h-screen w-full flex justify-center items-center">
          <StreamList providers={Providers} setLink={setLink} id={id} />
        </div>
      </MovieWrapper>

      <Player resource={link} iframeRef={iframeRef} show={showMovieWrapper} />
    </div>
  );
}
