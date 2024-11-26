import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const TMDB_APIKEY = "9a0c3939c8185ecdba0040f2a4167b70";
const TMDB_BASE = "https://api.themoviedb.org/3";

export default function useSearch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { provider, id } = useParams();

  const getDetails = async () => {
    setLoading(true);
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
        setData(null);
      }
    } catch (error) {
      setError(error);
      console.error("Error fetching data from TMDB:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  return { data, loading, error };
}
