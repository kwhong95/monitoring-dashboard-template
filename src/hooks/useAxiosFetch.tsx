import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const src = axios.CancelToken.source();

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, {
          cancelToken: src.token,
        });
        if (isMounted) {
          setData(res.data);
          setFetchError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const clearUp = () => {
      isMounted = false;
      src.cancel();
    };

    return clearUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
