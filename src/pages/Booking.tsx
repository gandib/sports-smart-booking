/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import facilityApi from "../redux/features/facilityManagement/facilityApi";
import { Button, Card, Col, DatePicker, Form, Row } from "antd";
import Meta from "antd/es/card/Meta";
import moment from "moment";
import { useState } from "react";
import PHForm from "../components/form/PHForm";
import PHTimePicker from "../components/form/PHTimePicker";
import bookingApi from "../redux/features/bookingManagement/bookingApi";
import { Controller, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { TBooking, TResponse } from "../types";

const Booking = () => {
  const { facilityId } = useParams();
  const [date, setDate] = useState("");
  const [newDate, setNewDate] = useState("");
  const navigate = useNavigate();

  const { data: facilityData } =
    facilityApi.useGetSingleFacilityQuery(facilityId);
  console.log(facilityData);

  const { data: checkTimeSlots } = bookingApi.useCheckAvailabilityQuery([
    { name: "date", value: newDate },
    { name: "facility", value: facilityId },
  ]);

  const [createBooking] = bookingApi.useAddBookingMutation();

  console.log(checkTimeSlots);
  const handleCheck = () => {
    setNewDate(date);
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const bookingData = {
      facility: facilityId,
      date,
      startTime: moment(new Date(data.startTime)).format("HH:mm"),
      endTime: moment(new Date(data.endTime)).format("HH:mm"),
    };
    console.log(bookingData);
    const toastId = toast.loading("Loading...");

    try {
      const res = (await createBooking(bookingData)) as TResponse<{
        message: string;
        data: TBooking;
      }>;
      console.log(res);
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        navigate(`/payment/${res?.data?.data?._id}`);
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };
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
        <PHForm onSubmit={onSubmit}>
          <Row justify={"space-between"} style={{ margin: "0 0 5px 0" }}>
            <Col span={10}>
              <Controller
                name="date"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item
                    name="date"
                    required={true}
                    rules={[
                      { required: true, message: `Please choose your date!` },
                    ]}
                  >
                    <DatePicker
                      style={{ width: "100%", height: "40px" }}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setDate(moment(new Date(e)).format("YYYY-MM-DD"));
                      }}
                      {...field}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Button style={{ height: "40px" }} onClick={handleCheck}>
              Check Availability
            </Button>
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
            style={{ margin: "0 1px 5px 1px", display: "flex" }}
          >
            {checkTimeSlots?.data?.map(
              (item: { startTime: string; endTime: string }, num: number) => (
                <Col
                  key={num}
                  span={10}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "40px",
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "5px",
                  }}
                >
                  <Col>{`${item.startTime} - ${item.endTime}`}</Col>
                </Col>
              )
            )}
          </Row>

          {/* form */}
          {/* <PHForm onSubmit={onSubmit}> */}
          <Row justify={"space-between"}>
            <Col style={{ fontSize: "18px" }} span={10}>
              Start Time
            </Col>
            <Col style={{ fontSize: "18px" }} span={10}>
              End Time
            </Col>
          </Row>
          <Row justify={"space-between"}>
            <Col span={10}>
              <Col span={24}>
                <PHTimePicker name="startTime" required={true} />
              </Col>
            </Col>
            <Col span={10}>
              <Col span={24}>
                <PHTimePicker name="endTime" required={true} />
              </Col>
            </Col>
          </Row>

          <Col span={10}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                margin: "10px 0 0 0",
                backgroundColor: "slategrey",
                color: "white",
                height: "40px",
              }}
            >
              Proceed to Pay
            </Button>
          </Col>
        </PHForm>
      </Col>
    </Row>
  );
};

export default Booking;
