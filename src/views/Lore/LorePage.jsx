import { useContext } from "react";
import Lore from "../../Components/lore/Lore";
import LoginContext from "../../Context/LoginContext";
import CustomizedProgressBars from "../../Components/CircleLoading/CircleLoading";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";

const LorePage = () => {
const { loading } = useContext(LoginContext);

return loading ? (
    <CustomizedProgressBars />
) : (
    <>
    <Navbar />
    <Lore />
    <Footer />
    </>
);
};

export default LorePage;
