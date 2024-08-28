import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

import facilityApi from "../redux/features/facilityManagement/facilityApi";

const FeaturedFacilities = () => {
  const { data: facilityData } = facilityApi.useGetAllFacilityQuery(undefined);

  console.log(facilityData);

  const filterFacility = facilityData?.data
    ? [...facilityData.data].sort((a, b) => a.pricePerHour - b.pricePerHour)
    : [];

  return (
    <Row>
      <h1 style={{ marginBottom: "5px" }}>Featured Facility</h1>

      <Col span={24}>
        <Row gutter={[16, 16]}>
          {facilityData?.data?.length === 0 && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              No data found!
            </p>
          )}
          {filterFacility?.slice(0, 3)?.map((item) => (
            <Col key={item._id} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    style={{ height: 320 }}
                    alt={item.name}
                    src={item.image}
                  />
                }
              >
                <Meta title={item.name} />
                <Meta description={item.description.slice(0, 100)} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default FeaturedFacilities;
