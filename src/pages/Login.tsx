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
      console.log(res);

      navigate(`/${user.role}/dashboard`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Somethiong went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div>
        <h1 style={{ marginBottom: "10px" }}>Login</h1>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="email" label="Email:" />
          <PHInput type="text" name="password" label="Password:" />
          <h4 style={{ marginBottom: "5px" }}>
            New to Sports Smart Booking? Go to{" "}
            <span style={{ color: "green", cursor: "pointer" }}>
              <Link to="/register">Register</Link>
            </span>
          </h4>
          <Button htmlType="submit">Login</Button>
        </PHForm>
      </div>
    </Row>
  );
};

export default Login;
