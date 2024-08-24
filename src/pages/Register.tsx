import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Register = () => {
  const navigate = useNavigate();
  // const { register } = useForm();

  //   const dispatch = useAppDispatch();

  //   const [login] = authApi.useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in.");

    //     try {
    //       const res = await login(data).unwrap();
    //       const user = verifyToken(res.data.accessToken) as TUser;

    //       dispatch(setUser({ user: user, token: res.data.accessToken }));
    //       toast.success("Logged in successfully!", { id: toastId, duration: 2000 });
    //       console.log(res);
    //       if (res?.data?.needsPassword) {
    //         navigate(`/change-password`);
    //       } else {
    //         navigate(`/${user.role}/dashboard`);
    //       }
    //     } catch (error) {
    //       toast.error("Somethiong went wrong!", { id: toastId, duration: 2000 });
    //     }
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

export default Register;
