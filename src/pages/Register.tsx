import CreateUser from "../components/CreateUser";

const Register = () => {
  const role = "user";
  return (
    <div>
      <CreateUser role={role} />
    </div>
  );
};

export default Register;
