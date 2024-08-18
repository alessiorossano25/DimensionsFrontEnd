import { useContext, useEffect } from "react";
import UserProfile from "../../Components/userprofile/UserProfile";
import LoginContext from "../../Context/LoginContext";
import CustomizedProgressBars from "../../Components/CircleLoading/CircleLoading";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";

const UserProfilePage = () => {
const { loading, user } = useContext(LoginContext);
const navigate = useNavigate();

useEffect(() => {
    if (!loading && !user) {
    console.log(user);
    navigate("/");
    }
}, [loading, user]);

return loading || !user ? (
    <CustomizedProgressBars />
) : (
    <>
    <Navbar />
    <UserProfile />
    <Footer />
    </>
);
};

export default UserProfilePage;
