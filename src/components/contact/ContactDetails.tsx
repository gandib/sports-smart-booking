import { Col, Row } from "antd";

const ContactDetails = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Row justify={"center"}>
        <Col
          span={24}
          lg={{ span: 16 }}
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
              <h2>Contact Details</h2>
              <p style={{ fontSize: "18px" }}>
                Office Address: 123 Main St, Springfield
              </p>
              <p style={{ fontSize: "18px" }}>Phone: (123) 456-7890</p>
              <p style={{ fontSize: "18px" }}>Email: contact@company.com</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactDetails;
