/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import facilityApi from "../redux/features/facilityManagement/facilityApi";
import { Button, Card, Col, DatePicker, Row, TimePicker } from "antd";
import Meta from "antd/es/card/Meta";
import moment from "moment";
import { useState } from "react";

const Booking = () => {
  const { facilityId } = useParams();
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

  const { data: facilityData } =
    facilityApi.useGetSingleFacilityQuery(facilityId);
  console.log(facilityData);

  const onDateChange = (data: Date) => {
    setDate(moment(new Date(data)).format("YYYY-MM-DD"));
  };
  const onStartTimeChange = (data: any) => {
    setStartTime(moment(new Date(data)).format("HH:mm"));
  };
  const onEndTimeChange = (data: any) => {
    setEndTime(moment(new Date(data)).format("HH:mm"));
  };
  console.log(date, startTime, endTime);
  return (
    <Row justify={"center"}>
      <Col span={24} lg={{ span: 18 }}>
        <Col lg={{ span: 24 }}>
          <Card style={{ width: "100%" }}>
            <Meta
              style={{ fontWeight: "bold" }}
              title={facilityData?.data?.name}
            />
            <Meta description={`location: ${facilityData?.data?.location}`} />
            <Meta
              description={`Price Per Hour: $${facilityData?.data?.pricePerHour}`}
            />
          </Card>
        </Col>
        <Row justify={"space-between"}>
          <Col span={10}>
            <DatePicker style={{ width: "100%" }} onChange={onDateChange} />
          </Col>
          <Button>Check Availability</Button>
        </Row>
        <Col
          style={{
            fontSize: "20px",
            margin: "10px 0 10px 0",
          }}
        >
          Available Slots
        </Col>

        <Row
          justify={"space-between"}
          gutter={12}
          style={{ margin: "0 1px 0 1px" }}
        >
          <Col
            span={10}
            style={{
              backgroundColor: "black",
              color: "white",
              height: "30px",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Col>10:00</Col>
          </Col>
          <Col
            span={10}
            style={{
              backgroundColor: "black",
              color: "white",
              height: "30px",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Col>12:00</Col>
          </Col>
        </Row>

        <Row justify={"space-between"} style={{ margin: "10px 0 10px 0" }}>
          <Col style={{ fontSize: "18px" }} span={10}>
            Start Time
          </Col>
          <Col style={{ fontSize: "18px" }} span={10}>
            End Time
          </Col>
        </Row>
        <Row justify={"space-between"} gutter={12}>
          <Col span={10}>
            <Col span={24}>
              <TimePicker
                onChange={onStartTimeChange}
                format={"HH:mm"}
                style={{ width: "100%" }}
              />
            </Col>
          </Col>
          <Col span={10}>
            <Col span={24}>
              <TimePicker
                onChange={onEndTimeChange}
                format={"HH:mm"}
                style={{ width: "100%" }}
              />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Booking;
