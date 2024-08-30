import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "John has over 20 years of experience in the industry and is passionate about leading the company to new heights.",
      photo:
        "https://img.freepik.com/free-photo/portrait-young-person-holding-camera-device-world-photography-day_23-2151609273.jpg?t=st=1724857613~exp=1724861213~hmac=ccbb25b873a7a9b7e1d8fa06e2a55e5e01f2b51e6aa6e5032b5224ba90f8724d&w=996",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane is an expert in technology and innovation, driving our technical strategy and growth.",
      photo:
        "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261823.jpg?t=st=1724857591~exp=1724861191~hmac=cde00fbe0025a7a4334d5716876bc0777defff39ef0c9d6aff93adf88fcd5f89&w=360",
    },
  ];
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "20px" }}>
      <div>
        <h2 style={{ marginBottom: "10px" }}>Team Section</h2>
      </div>

      <Col span={24}>
        <Row gutter={[16, 16]}>
          {teamMembers?.map((item, num) => (
            <Col key={num} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Card
                style={{ width: "300px" }}
                cover={
                  <img
                    style={{ height: 300, width: "300px" }}
                    alt={item.name}
                    src={item.photo}
                  />
                }
              >
                <Meta title={item.name} />
                <Meta title={item.role} />
                <Meta title={item.bio} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default TeamSection;
