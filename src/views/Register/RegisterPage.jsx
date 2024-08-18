import { useContext } from "react";
import Register from "../../Components/register/Register";
import LoginContext from "../../Context/LoginContext";
import CustomizedProgressBars from "../../Components/CircleLoading/CircleLoading";

const RegisterPage = () => {
  const { loading } = useContext(LoginContext);
  
  return <>{loading ? <CustomizedProgressBars /> : <Register />}</>;
};
export default RegisterPage;
