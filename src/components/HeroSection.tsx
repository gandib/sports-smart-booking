import { Button, Col, Image, Row } from "antd";
import banner from "../assets/images/sport-football-arena-photography.jpg";

const HeroSection = () => {
  return (
    <Row>
      <Col>
        <Image
          // span={24}
          src={banner}
          preview={false}
          style={{
            position: "relative",
          }}
        />
        <Col
          style={{
            position: "absolute",
            textAlign: "center",
            top: "40%",
            left: "50%",
            translate: "-50% -50%",
            color: "white",
          }}
        >
          <h1 style={{}}>Book with real-time availability.</h1>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "yellow",
              fontWeight: "bold",
            }}
          >
            Book Now
          </Button>
        </Col>
      </Col>
    </Row>
  );
};

export default HeroSection;
