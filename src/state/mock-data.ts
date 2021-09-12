import { ReactComponent as Gauage } from '../assets/gauge.svg';
import { ReactComponent as BigElecFan } from '../assets/big-electric-fan.svg';
import { ReactComponent as Temp } from '../assets/temperature.svg';

export interface IData {
  title: string;
  payload: number;
  unit: string;
  Icon: any;
}

export const MockData: IData[] = [
  {
    title: "차압계",
    payload: 37.06,
    unit: "mmAQ",
    Icon: Gauage
  },
  {
    title: "배풍기",
    payload: 13.48,
    unit: "A",
    Icon: BigElecFan
  },
  {
    title: "송풍기",
    payload: 7.11,
    unit: "A",
    Icon: BigElecFan
  },
  {
    title: "온도",
    payload: 37.2,
    unit: "˚C",
    Icon: Temp
  }
]