import { useEffect, useState } from "react";
import Youtube from "../apis/Youtube";

function useVideos(defaultSearchTerm) {
  var [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  var search = async (term) => {
    var response = await Youtube.get("/search", { params: { q: term } });
    setVideos(response.data.items);
  };

  return [videos, search];
}

export default useVideos;
