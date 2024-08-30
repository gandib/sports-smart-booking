import { Card, Carousel, Col, Rate, Row } from "antd";
import { CSSProperties, useEffect, useState } from "react";

const UserFeedback = () => {
  const [data, setData] = useState([]);

  const contentStyle: CSSProperties = {
    height: "280px",
    textAlign: "center",
  };

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
      <Row>
        <Col span={24}>
          <Row align={"middle"} justify={"center"}>
            <Col
              lg={{ span: 12 }}
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <Carousel
                autoplay
                style={contentStyle}
                slidesPerRow={1}
                // centerMode={true}
              >
                {data?.map(
                  (
                    item: { user: string; rating: number; comment: string },
                    num: number
                  ) => (
                    // <Col key={num} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    //   <Card
                    //     title={item.user}
                    //     bordered={false}
                    //     style={{ height: "250px" }}
                    //   >
                    //     {item.comment}
                    //     <Col>
                    //       <Rate defaultValue={item.rating} disabled />
                    //     </Col>
                    //   </Card>
                    // </Col>
                    // <Carousel key={num} autoplay>

                    <Card
                      key={num}
                      title={item.user}
                      bordered={false}
                      style={{ padding: "10px", width: "200px" }}
                      actions={[<Rate defaultValue={item.rating} disabled />]}
                    >
                      <div style={{ height: "100px" }}>
                        {item.comment.slice(0, 200)}
                      </div>
                    </Card>

                    // </Carousel>
                  )
                )}
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserFeedback;
