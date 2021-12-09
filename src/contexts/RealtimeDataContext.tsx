import { createContext, useContext, useEffect, useState } from "react";
import useAxiosFetch from "hooks/useAxiosFetch";

export type RealtimeData = {
  data: { title: string; value: number }[];
  time: number;
} | null;

const RealtimeDataContext = createContext({});

export const RealtimeDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rtdata, updateRtdata] = useState([]);
  const baseUrl = "http://3.34.87.77:8888/api";

  const { data } = useAxiosFetch(`${baseUrl}/profile`, `${baseUrl}/data`);

  useEffect(() => {
    updateRtdata(data);
  }, [data]);

  return (
    <RealtimeDataContext.Provider value={{ rtdata }}>
      {children}
    </RealtimeDataContext.Provider>
  );
};

export const useRealtimeData = () => {
  const data = useContext(RealtimeDataContext);
  if (data === null) throw new Error("데이터를 찾을 수 없습니다.");
  return data;
};
