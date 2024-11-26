import React, { useState } from "react";
import Loader from "./Loader";

export default function Player({ resource, iframeRef, show }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen z-[1] bg-black">
      {isLoading && !show && <Loader />}
      {resource && !show && (
        <iframe
          ref={iframeRef}
          src={resource}
          allowFullScreen
          className={`w-full h-screen transition-opacity duration-500 ${isLoading ? "hidden" : "flex"}`}
          onLoad={handleLoad}
        ></iframe>
      )}
    </div>
  );
}
