import {
  DetailWrap,
  DetailTitle,
  DetailHeader,
  DetailValue,
  DetailContent,
} from './elements';
import { IData, MockData } from "../state/mock-data";
import { useParams } from "react-router-dom";
import Chart from "./chart";

interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  const { id }: { id: string } = useParams();
  const data: IData | any = MockData.find((item) => {
    if (item.id === id ) return item; });

  console.log(data);

  return (
    <DetailWrap>
      <DetailHeader>
        <DetailTitle>
          <data.Icon height="30" width="30" fill="#fff" />
          <h1 style={{ marginTop: "30px" }}>{data.title}</h1>
        </DetailTitle>
        <DetailValue>
          <h1>{data.payload}</h1>
          <h1 style={{ color: "gray" }}>{data.unit}</h1>
        </DetailValue>
      </DetailHeader>
      <DetailContent>
        <Chart />
      </DetailContent>
    </DetailWrap>
  );
};

export default Detail;
