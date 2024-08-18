import { useContext } from "react";
import Login from "../../Components/login/Login";
import LoginContext from "../../Context/LoginContext";
import CustomizedProgressBars from "../../Components/CircleLoading/CircleLoading";

const LoginPage = () => {
  const { loading } = useContext(LoginContext);
  
  return <>{loading ? <CustomizedProgressBars /> : <Login />}</>;
};
export default LoginPage;
