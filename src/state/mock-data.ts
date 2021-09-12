export interface IData {
  title: string;
  payload: number;
  unit: string;
  src: string;
}

export const MockData: IData[] = [
  {
    title: "차압계",
    payload: 37.06,
    unit: "mmAQ",
    src: "/gauge.svg"
  },
  {
    title: "배풍기",
    payload: 13.48,
    unit: "A",
    src: "/big-electric-fan.svg"
  },
  {
    title: "송풍기",
    payload: 7.11,
    unit: "A",
    src: "/big-electric-fan.svg"
  },
  {
    title: "온도",
    payload: 37.2,
    unit: "˚C",
    src: "temperature.svg"
  }
]