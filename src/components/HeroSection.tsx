import { Button, Col, Row } from "antd";
import banner from "../assets/images/sport-football-arena-photography.jpg";

const HeroSection = () => {
  return (
    <Row>
      <Col
        span={24}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          height: "1000px",
          width: "1500px",
          backgroundSize: "contain",
          position: "relative",
        }}
      >
        <Col
          style={{
            position: "absolute",
            textAlign: "center",
            top: "10%",
            left: "50%",
            translate: "-50% -50%",
            color: "white",
          }}
        >
          <h1 style={{}}>
            A service for reserving football grounds with real-time
            availability.
          </h1>
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
