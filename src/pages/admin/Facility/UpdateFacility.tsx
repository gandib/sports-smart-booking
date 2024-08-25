/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import facilityApi from "../../../redux/features/facilityManagement/facilityApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFacility = () => {
  const { facilityId } = useParams();
  const navigate = useNavigate();
  const { data: facility, isLoading } =
    facilityApi.useGetSingleFacilityQuery(facilityId);
  console.log(facilityId, facility);

  const defaultValues = {
    name: facility?.data?.name,
    description: facility?.data?.description,
    pricePerHour: facility?.data?.pricePerHour,
    location: facility?.data?.location,
  };

  const [updateFacility] = facilityApi.useUpdateFacilityMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const facilityData = {
      data: {
        ...data,
        pricePerHour: Number(data.pricePerHour),
        image: "",
      },
      id: facilityId,
    };
    console.log(facilityData);
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(facilityData));
    // formData.append("file", data?.image);

    const toastId = toast.loading("Loading...");

    try {
      const res = (await updateFacility(facilityData)) as TResponse<{
        message: string;
      }>;
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
        navigate(`/admin/all-facility`);
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
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

            {/* <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
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
            </Col> */}
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default UpdateFacility;
