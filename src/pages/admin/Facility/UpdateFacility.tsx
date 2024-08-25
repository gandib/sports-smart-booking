import { useParams } from "react-router-dom";

const UpdateFacility = () => {
  const { facilityId } = useParams();
  console.log(facilityId);
  return (
    <div>
      <h1>Hello, UpdateFacility!</h1>
    </div>
  );
};

export default UpdateFacility;
