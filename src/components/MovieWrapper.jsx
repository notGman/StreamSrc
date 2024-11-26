import React, { Children, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "./Loader";

export default function MovieWrapper({ show, children, backdrop }) {
  const { provider, id } = useParams();

  if (!backdrop) return <Loader />;

  return (
    <div
      className={`absolute inset-0 z-[2] h-screen w-full bg-cover bg-center transition-transform duration-300 ${!show ? "-translate-y-full" : ""}`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop.backdrop_path}")`,
      }}
    >
      <div className="w-full h-screen bg-black bg-opacity-55">{children}</div>
    </div>
  );
}
