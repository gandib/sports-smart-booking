import { TFacility } from "./facility.type";

export type TBooking = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: TFacility;
  payableAmount: number;
  isBooked: string;
};
