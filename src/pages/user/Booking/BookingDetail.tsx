import { useParams } from "react-router-dom";

const BookingDetail = () => {
  const { bookingId } = useParams();
  console.log(bookingId);
  return (
    <div>
      <h1>Hello, BookingDetail!</h1>
    </div>
  );
};

export default BookingDetail;
