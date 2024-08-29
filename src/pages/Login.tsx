/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import authApi from "../redux/features/auth/authApi";

const Login = () => {
  const navigate = useNavigate();
  //   const { register } = useForm();

  const dispatch = useAppDispatch();

  const [login] = authApi.useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in.");

    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in successfully!", { id: toastId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div>
        <h1
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Login
        </h1>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="email" label="Email:" required={true} />
          <PHInput
            type="text"
            name="password"
            label="Password:"
            required={true}
          />
          <h4 style={{ marginBottom: "15px" }}>
            New to Sports Smart Booking? Go to{" "}
            <span style={{ color: "green", cursor: "pointer" }}>
              <Link to="/register">Register</Link>
            </span>
          </h4>
          <Button
            style={{
              backgroundColor: "slategray",
              color: "white",
              fontWeight: "bold",
              width: "100%",
            }}
            htmlType="submit"
          >
            Login
          </Button>
        </PHForm>
      </div>
    </Row>
  );
};

export default Login;
