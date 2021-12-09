import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl: string, dataUrl2: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const src = axios.CancelToken.source();

    const fetchData = async (url: string, url2: string) => {
      setIsLoading(true);
      try {
        let data = [];
        const res = await axios.get(url, {
          cancelToken: src.token,
        });
        const res2 = await axios.get(url2, {
          cancelToken: src.token,
        });

        data.push({ title: res, value: res2 });

        console.log(data);
        if (isMounted) {
          setData(data as any);
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

    fetchData(dataUrl, dataUrl2);

    const clearUp = () => {
      isMounted = false;
      src.cancel();
    };

    return clearUp;
  }, [dataUrl, dataUrl2]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
