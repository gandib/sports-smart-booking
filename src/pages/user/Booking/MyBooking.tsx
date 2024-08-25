/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Table, TableColumnsType } from "antd";
import { TBooking } from "../../../types";
import bookingApi from "../../../redux/features/bookingManagement/bookingApi";
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "sonner";

export type TTableData = Pick<TBooking, "facility" | "_id">;

const MyBooking = () => {
  const {
    data: userBookingData,
    isFetching,
    isLoading,
  } = bookingApi.useGetUserBookingsQuery(undefined);

  const [deleteBooking] = bookingApi.useDeleteBookingMutation();

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

    {
      title: "Action",
      key: "x",
      render: (item) => {
        const handleCancel = async (id: string) => {
          const toastId = toast.loading("Deleting...");
          console.log(id);

          try {
            const res = await deleteBooking(id).unwrap();

            toast.success(res.message, { id: toastId, duration: 2000 });
            console.log(res);
          } catch (error: any) {
            toast.error(error.data.message, { id: toastId, duration: 2000 });
          }
        };

        return (
          <Space>
            <Link to={`/user/my-bookings/${item?.key}`}>
              <Button>Details</Button>
            </Link>
            <Button onClick={() => handleCancel(item?.key)}>Cancel</Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default MyBooking;
