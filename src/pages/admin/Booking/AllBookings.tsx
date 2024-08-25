/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType } from "antd";
import { TBooking } from "../../../types";
import bookingApi from "../../../redux/features/bookingManagement/bookingApi";
import moment from "moment";

export type TTableData = Pick<TBooking, "facility" | "_id">;

const AllBookings = () => {
  const { data: userBookingData, isFetching } =
    bookingApi.useGetAllBookingsQuery(undefined);

  console.log(userBookingData);

  const tableData = userBookingData?.data?.map(
    ({ _id, facility, startTime, endTime, date, payableAmount }: TBooking) => ({
      key: _id,
      name: facility.name,
      startTime,
      endTime,
      date: moment(new Date(date)).format("DD MMMM YYYY"),
      payableAmount,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Start Time",
      key: "startTime",
      dataIndex: "startTime",
    },
    {
      title: "EndTime",
      key: "endTime",
      dataIndex: "endTime",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Payable Amount",
      key: "payableAmount",
      dataIndex: "payableAmount",
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default AllBookings;
