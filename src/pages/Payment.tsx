/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import bookingApi from "../redux/features/bookingManagement/bookingApi";
import { Button } from "antd";
import paymentApi from "../redux/features/paymentManagement/paymentApi";
import { toast } from "sonner";
import { TResponse } from "../types";

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
  return (
    <div>
      <Button onClick={handlePayment}>Pay</Button>
    </div>
  );
};

export default Payment;
