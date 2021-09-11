interface IData {
  title: string;
  payload: number;
  unit: string;
}

export const MockData: IData[] = [
  {
    title: "차압계",
    payload: 37.06,
    unit: "mmAQ"
  },
  {
    title: "배풍기",
    payload: 13.48,
    unit: "A"
  },
  {
    title: "송풍기",
    payload: 7.11,
    unit: "A"
  },
  {
    title: "온도",
    payload: 37.2,
    unit: "˚C"
  }
]