import { Button, Col, Row } from "antd";
import PHForm from "./form/PHForm";
import PHInput from "./form/PHInput";
import { FieldValues } from "react-hook-form";

const NewsLetter = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <h1 style={{ margin: "40px 0 0 0" }}>Get Newsletter</h1>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Row
            gutter={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="email"
                placeholder="Type your email"
                required={true}
              />
              <Col
                span={24}
                lg={{ span: 8 }}
                style={
                  {
                    //   marginLeft: "25%",
                  }
                }
              >
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "slategray",
                    color: "white",
                    fontWeight: "bold",
                    height: "40px",
                  }}
                  htmlType="submit"
                >
                  Subscribe
                </Button>
              </Col>
            </Col>
          </Row>
        </PHForm>
      </Col>
    </div>
  );
};

export default NewsLetter;
