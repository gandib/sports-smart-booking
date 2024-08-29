import { Button, Col, Row } from "antd";
import PHForm from "../form/PHForm";
import PHInput from "../form/PHInput";
import { FieldValues } from "react-hook-form";

const ContactForm = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Row justify="center" style={{ marginBottom: "20px" }}>
      <div>
        <h1 style={{ marginBottom: "10px" }}>Contact Details</h1>
        <Col span={24}>
          <PHForm onSubmit={onSubmit}>
            <Row gutter={8}>
              <Col
                span={24}
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
              >
                <PHInput
                  type="text"
                  name="name"
                  label="Name:"
                  required={true}
                />
              </Col>
              <Col
                span={24}
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
              >
                <PHInput
                  type="text"
                  name="email"
                  label="Email:"
                  required={true}
                />
              </Col>
              <Col
                span={24}
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
              >
                <PHInput
                  type="text"
                  name="subject"
                  label="Subject:"
                  required={true}
                />
              </Col>
              <Col
                span={24}
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
              >
                <PHInput
                  type="text"
                  name="message"
                  label="Message:"
                  required={true}
                />
              </Col>
              <Col
                span={12}
                style={{
                  marginLeft: "25%",
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "slategray",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </PHForm>
        </Col>
      </div>
    </Row>
  );
};

export default ContactForm;
