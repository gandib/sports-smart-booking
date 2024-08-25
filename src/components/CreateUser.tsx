/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import authApi from "../redux/features/auth/authApi";
import PHForm from "./form/PHForm";
import PHInput from "./form/PHInput";
import { useState } from "react";

const CreateUser = ({ role }: { role: string }) => {
  const navigate = useNavigate();
  // const { register } = useForm();
  const [error, setError] = useState("");
  console.log(role);

  const [signup] = authApi.useSignupMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering...");
    const userData = {
      ...data,
      role,
    };
    console.log(error);

    try {
      const res = await signup(userData).unwrap();

      toast.success(res.message, { id: toastId, duration: 2000 });
      console.log(res);

      if (res?.data?.email) {
        navigate(`/login`);
      }
    } catch (error: any) {
      console.log(error);
      setError(error.data.errorMessages[0].message);
      toast.error(error.data.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div>
        <h1 style={{ marginBottom: "10px" }}>Register</h1>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name:" />
          <PHInput type="text" name="email" label="Email:" />
          <PHInput type="text" name="password" label="Password:" />
          <PHInput type="text" name="phone" label="Phone:" />
          <PHInput type="text" name="address" label="Address:" />
          <p style={{ color: "red" }}>{error}</p>
          <h4 style={{ marginBottom: "5px" }}>
            Already have an account? Go to{" "}
            <span style={{ color: "green", cursor: "pointer" }}>
              <Link to="/login">Login</Link>
            </span>
          </h4>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </div>
    </Row>
  );
};

export default CreateUser;
