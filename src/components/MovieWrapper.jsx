import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import StreamList from "./StreamList";

const TMDB_APIKEY = "9a0c3939c8185ecdba0040f2a4167b70";
const TMDB_BASE = "https://api.themoviedb.org/3";
const getLinks = [
    `https://multiembed.mov/?video_id=`,
    `https://vidsrc.to/embed/movie/`,
    `https://moviesapi.club/movie/`,
    `https://databasegdriveplayer.xyz/player.php?imdb=`,
  ];

export default function MovieWrapper({ setUrl }) {
  const { provider, id } = useParams();
  const [data, setData] = useState(null);
  const [videoId,setVideoId] = useState(0)

  const getDetails = async () => {
    try {
      const response = await axios.get(`${TMDB_BASE}/find/${id}?api_key=${TMDB_APIKEY}&external_source=imdb_id`);

      const nonEmptyResult = Object.keys(response.data).find((key) => Array.isArray(response.data[key]) && response.data[key].length > 0);
      if (nonEmptyResult) {
        setData({
          key: nonEmptyResult,
          results: response.data[nonEmptyResult],
        });
      } else {
        console.log("No non-empty arrays found in the response.");
      }
    } catch (error) {
      console.error("Error fetching data from TMDB:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);
  
  useEffect(()=>{
    setUrl(getLinks[videoId]+id)
  },[videoId])

  if (!data) return <p>Loading or no results found.</p>;

  const movie = data.results[0];

  return (
    <>
      <div
        className="h-screen bg-cover bg-cente z-10r"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <div className="relative flex flex-col gap-y-5 items-center justify-center h-full text-white bg-black bg-opacity-65">
          <StreamList setVideoId={setVideoId}/>
        </div>
      </div>
    </>
  );
}
