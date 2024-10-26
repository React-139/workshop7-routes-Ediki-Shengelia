import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
export const useFetchHook = (country) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetchData(country)
      .then((val) => setData(val))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [country]);
  return { isLoading, data, error };
};
