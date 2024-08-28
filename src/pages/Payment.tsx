/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import bookingApi from "../redux/features/bookingManagement/bookingApi";
import { Button, Col, Row, Table, TableProps } from "antd";
import paymentApi from "../redux/features/paymentManagement/paymentApi";
import { toast } from "sonner";
import { TResponse } from "../types";

type DataType = {
  key: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  amount: string;
};

const Payment = () => {
  const { bookingId } = useParams();

  const { data: bookingData } = bookingApi.useGetBookingByIdQuery(bookingId);
  console.log(bookingData);

  const [initiatePayment] = paymentApi.useInitiatePaymentMutation();

  const handlePayment = async () => {
    const paymentData = {
      bookingId: bookingData?.data?._id,
      userId: bookingData?.data?.user,
      amount: bookingData?.data?.payableAmount,
      transactionId: `TXN-${Date.now()}`,
    };
    console.log(paymentData);

    const toastId = toast.loading("Loading...");

    try {
      const res = (await initiatePayment(paymentData)) as TResponse<{
        message: string;
        data: {
          payment_url: any;
        };
      }>;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.error, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        window.location.href = res?.data?.data?.payment_url;
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Amount",
      className: "column-money",
      dataIndex: "amount",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: bookingData?.data?.facility?.name,
      date: bookingData?.data?.date,
      startTime: bookingData?.data?.startTime,
      endTime: bookingData?.data?.endTime,
      amount: `$${bookingData?.data?.payableAmount}`,
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "Booking Summary"}
        pagination={false}
      />
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "#fafafa",
            height: "55px",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <Col
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              paddingLeft: "15px",
              fontWeight: "bold",
            }}
            span={20}
          >
            Total Amount
          </Col>
          <Col
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              paddingLeft: "30px",
              fontWeight: "bold",
            }}
            span={4}
          >
            {`$${bookingData?.data?.payableAmount}`}
          </Col>
        </Col>
      </Row>
      <Row style={{ display: "flex", justifyContent: "end", margin: "20px" }}>
        <Col span={4}>
          <Button
            onClick={handlePayment}
            style={{
              width: "100%",
              backgroundColor: "slategrey",
              color: "white",
              fontWeight: "bold",
              height: "40px",
            }}
          >
            Pay
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Payment;
