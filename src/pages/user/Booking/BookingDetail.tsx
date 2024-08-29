import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useParams } from "react-router-dom";
import bookingApi from "../../../redux/features/bookingManagement/bookingApi";
import moment from "moment";

const BookingDetail = () => {
  const { bookingId } = useParams();

  const { data: bookingData } = bookingApi.useGetBookingByIdQuery(bookingId);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{ minWidth: "50%" }}
        cover={<img alt="example" src={bookingData?.data?.facility?.image} />}
      >
        <Meta title={`Name: ${bookingData?.data?.facility?.name}`} />
        <Meta title={`Location: ${bookingData?.data?.facility?.location}`} />
        <Meta
          title={`Price Per Hour: $${bookingData?.data?.facility?.pricePerHour}`}
        />
        <Meta
          title={`Date: ${moment(new Date(bookingData?.data?.date)).format(
            "DD MMMM YYYY"
          )}`}
        />
        <Meta title={`Payable Amount: $${bookingData?.data?.payableAmount}`} />
        <Meta title={`Start Time: ${bookingData?.data?.startTime}`} />
        <Meta title={`End Time: ${bookingData?.data?.endTime}`} />
        <Meta
          title={`Location: ${bookingData?.data?.facility?.location}`}
          description={bookingData?.data?.facility?.description}
        />
      </Card>
    </div>
  );
};

export default BookingDetail;
