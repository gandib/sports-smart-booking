/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Space, Table, TableColumnsType } from "antd";
import { TFacility } from "../../../types";
import facilityApi from "../../../redux/features/facilityManagement/facilityApi";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

export type TTableData = Pick<
  TFacility,
  "_id" | "name" | "pricePerHour" | "location" | "image"
>;

const AllFacility = () => {
  const [open, setOpen] = useState(false);
  const [facilityId, setFacilityId] = useState("");

  const { data: facilityData, isFetching } =
    facilityApi.useGetAllFacilityQuery(undefined);

  const [deleteFacility] = facilityApi.useDeleteFacilityMutation();

  const tableData = facilityData?.data?.map(
    ({ _id, image, location, name, pricePerHour }: TFacility) => ({
      key: _id,
      name,
      image,
      location,
      pricePerHour,
    })
  );

  const showModal = (id: string) => {
    setFacilityId(id);
    setOpen(true);
  };

  const handleOk = async () => {
    const toastId = toast.loading("Deleting...");

    try {
      const res = await deleteFacility(facilityId).unwrap();

      toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId, duration: 2000 });
    }

    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
    },
    {
      title: "Price Per Hour",
      key: "pricePerHour",
      dataIndex: "pricePerHour",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/update-facility/${item?.key}`}>
              <Button>Update</Button>
            </Link>
            <Button onClick={() => showModal(item?.key)}>Delete</Button>
            <Modal
              open={open}
              title="Are you sure to delete?"
              onOk={handleOk}
              onCancel={handleCancel}
              footer={(_, { OkBtn, CancelBtn }) => (
                <>
                  <CancelBtn />
                  <OkBtn />
                </>
              )}
            ></Modal>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      scroll={{ x: 800 }}
    />
  );
};

export default AllFacility;
