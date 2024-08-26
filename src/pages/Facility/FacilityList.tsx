import { Button, Card, Col, Input, Row, Select } from "antd";
import Meta from "antd/es/card/Meta";
import facilityApi from "../../redux/features/facilityManagement/facilityApi";
import type { GetProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacilityList = () => {
  const [priceFilter, setPriceFilter] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { data: facilityData } = facilityApi.useGetAllFacilityQuery([
    { name: "searchTerm", value: search },
  ]);

  console.log(facilityData);

  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value) => {
    setSearch(value);
  };

  const handleChange = (data: string) => {
    setPriceFilter(data);
  };

  let filterFacility;
  if (priceFilter === "low") {
    filterFacility = facilityData?.data
      ? [...facilityData.data].sort((a, b) => a.pricePerHour - b.pricePerHour)
      : [];
  } else if (priceFilter === "high") {
    filterFacility = facilityData?.data
      ? [...facilityData.data].sort((a, b) => b.pricePerHour - a.pricePerHour)
      : [];
  } else {
    filterFacility = facilityData?.data;
  }

  return (
    <Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={24}>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Select
              defaultValue="Filter"
              style={{ width: 160, marginRight: "10px" }}
              onChange={handleChange}
              size="large"
              options={[
                { value: "default", label: "Set Default" },
                { value: "low", label: "Low Price" },
                { value: "high", label: "High Price" },
              ]}
            />
            <Search
              placeholder="search by name or location"
              allowClear={true}
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Col>
        </Col>
      </Row>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          {facilityData?.data?.length === 0 && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              No data found!
            </p>
          )}
          {filterFacility?.map((item) => (
            <Col key={item._id} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    style={{ height: 320 }}
                    alt={item.name}
                    src={item.image}
                  />
                }
                actions={[
                  <Button onClick={() => navigate(`/facility/${item._id}`)}>
                    View Details
                  </Button>,
                ]}
              >
                <Meta title={item.name} />
                <Meta title={`Price: $${item.pricePerHour}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default FacilityList;
