import { useState, useEffect } from "react";
import axios from "axios";


function useCharacters() {
  const fetchUrl = "https://swapi.dev/api/people/";
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      let res = await axios.get(fetchUrl);
      setCharacters(res.data.results.map(item => ({...item, comments: []})))
      setLoading(false)

    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, []);


  return {
    characters, setCharacters, loading, error
  };
}

export default useCharacters;