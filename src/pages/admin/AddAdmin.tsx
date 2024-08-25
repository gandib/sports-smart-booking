import CreateUser from "../../components/CreateUser";

const AddAdmin = () => {
  const role = "admin";
  return (
    <div>
      <CreateUser role={role} />
    </div>
  );
};

export default AddAdmin;
