import { useState, useEffect } from "react";
import { Providers } from "../utils/Providers";

export function useProviderLinks(id, season, episode, provider_id) {
  const [link, setLink] = useState("");

  useEffect(() => {
    if (id) {
      let provider = Providers[provider_id].replace("ID", id);
      setLink(provider);
    }
  }, [id, season, episode]);

  return { link };
}
