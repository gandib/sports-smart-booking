/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import facilityApi from "../../../redux/features/facilityManagement/facilityApi";

const CreateFacility = () => {
  const [addFacility] = facilityApi.useCreateFacilityMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facilityData = {
      ...data,
      pricePerHour: Number(data.pricePerHour),
    };

    const toastId = toast.loading("Loading...");

    try {
      const res = (await addFacility(facilityData)) as TResponse<{
        message: string;
      }>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }

    // for development purpose to see data
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Facility Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="name" label="Name" required={true} />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput
                type="text"
                name="description"
                label="Description"
                required={true}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput
                type="text"
                name="pricePerHour"
                label="Price Per Hour"
                required={true}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput
                type="text"
                name="location"
                label="Location"
                required={true}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="image" label="Image" required={true} />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateFacility;
