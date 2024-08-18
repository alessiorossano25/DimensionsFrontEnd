import Navbar from "../../Components/navbar/Navbar";
import Slider from "../../Components/mainSlider/Slider";
import Footer from "../../Components/footer/Footer";
import Grid from "../../Components/grid/Grid";
import { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
import CustomizedProgressBars from "../../Components/CircleLoading/CircleLoading";

const HomePage = () => {
  const { loading } = useContext(LoginContext);
  
  return loading ? (
    <CustomizedProgressBars />
  ) : (
    <>
      <Navbar />
      <Slider />
      <Grid />
      <Footer />
    </>
  );
};
export default HomePage;
