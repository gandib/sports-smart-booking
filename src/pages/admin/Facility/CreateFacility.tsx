/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import facilityApi from "../../../redux/features/facilityManagement/facilityApi";

const CreateFacility = () => {
  const [addFacility, { data, error }] =
    facilityApi.useCreateFacilityMutation();

  console.log({ data, error });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const facilityData = {
      ...data,
      pricePerHour: Number(data.pricePerHour),
      image: "",
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(facilityData));
    formData.append("file", data?.image);

    const toastId = toast.loading("Loading...");

    try {
      const res = (await addFacility(formData)) as TResponse<{
        message: string;
      }>;
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }

    // for development purpose to see data
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Facility Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="description" label="Description" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="pricePerHour" label="Price Per Hour" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="location" label="Location" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Image">
                    <Input
                      type="file"
                      value={value?.fileName}
                      onChange={(e) => onChange(e.target.files?.[0])}
                      {...field}
                    />
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateFacility;
