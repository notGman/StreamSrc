import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const extractIdFromPath = () => {
    const pathSegments = location.pathname.split("/").filter((item) => item.trim() !== "");
    const length = pathSegments.length;
    return length > 0 ? pathSegments[length - 1] : null;
  };

  const id = extractIdFromPath();

  useEffect(() => {
    if (id) {
      navigate(`/imdb/${id}`);
    }
  }, [id, navigate]);

  return (
    <div>
      <h1>URL: {id}</h1>
    </div>
  );
};

export default App;
