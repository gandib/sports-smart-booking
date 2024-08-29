/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import authApi from "../redux/features/auth/authApi";
import PHForm from "./form/PHForm";
import PHInput from "./form/PHInput";

const CreateUser = ({ role }: { role: string }) => {
  const navigate = useNavigate();
  // const { register } = useForm();

  const [signup] = authApi.useSignupMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering...");
    const userData = {
      ...data,
      role,
    };

    try {
      const res = await signup(userData).unwrap();

      toast.success(res.message, { id: toastId, duration: 2000 });

      if (res?.data?.email) {
        navigate(`/login`);
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={20}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Register
        </h1>
        <PHForm onSubmit={onSubmit}>
          <Flex vertical>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput
                  type="text"
                  name="name"
                  label="Name:"
                  required={true}
                />
              </Col>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput
                  type="text"
                  name="email"
                  label="Email:"
                  required={true}
                />
              </Col>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput
                  type="text"
                  name="password"
                  label="Password:"
                  required={true}
                />
              </Col>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput
                  type="text"
                  name="phone"
                  label="Phone:"
                  required={true}
                />
              </Col>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput
                  type="text"
                  name="address"
                  label="Address:"
                  required={true}
                />
              </Col>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                {role === "user" && (
                  <h4 style={{ marginBottom: "5px" }}>
                    Already have an account? Go to{" "}
                    <span style={{ color: "green", cursor: "pointer" }}>
                      <Link to="/login">Login</Link>
                    </span>
                  </h4>
                )}
              </Col>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "slategray",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  htmlType="submit"
                >
                  Sign Up
                </Button>
              </Col>
            </Col>
          </Flex>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateUser;
