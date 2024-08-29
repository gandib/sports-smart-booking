import { Card, Col, Rate, Row } from "antd";
import { useEffect, useState } from "react";

const UserFeedback = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/feedback.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 style={{ margin: "40px 0 5px 0" }}>Customer Testimonials</h1>
      <Row gutter={[16, 16]}>
        {data?.map(
          (
            item: { user: string; rating: number; comment: string },
            num: number
          ) => (
            <Col key={num} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Card
                title={item.user}
                bordered={false}
                style={{ height: "250px" }}
              >
                {item.comment}
                <Col>
                  <Rate defaultValue={item.rating} disabled />
                </Col>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default UserFeedback;
