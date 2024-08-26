import { Button, Card, Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import facilityApi from "../../redux/features/facilityManagement/facilityApi";
import Meta from "antd/es/card/Meta";

const FacilityDetail = () => {
  const { facilityId } = useParams();
  const navigate = useNavigate();

  const { data: facilityData } =
    facilityApi.useGetSingleFacilityQuery(facilityId);
  console.log(facilityData);
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col key={facilityData?.data?._id} lg={{ span: 18 }}>
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              style={{ height: 400 }}
              alt={facilityData?.data?.name}
              src={facilityData?.data?.image}
            />
          }
          actions={[
            <Button onClick={() => navigate(`/booking`)}>Book Now</Button>,
          ]}
        >
          <Meta title={facilityData?.data?.name} />
          <Meta title={`location: ${facilityData?.data?.location}`} />
          <Meta title={`Price: $${facilityData?.data?.pricePerHour}`} />
          <Meta description={`${facilityData?.data?.description}`} />
        </Card>
      </Col>
    </Row>
  );
};

export default FacilityDetail;
