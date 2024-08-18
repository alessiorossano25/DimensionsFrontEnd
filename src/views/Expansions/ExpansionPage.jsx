import Navbar from "../../Components/navbar/Navbar";
import Expansion from "../../Components/expansions/Expansions";
import Footer from "../../Components/footer/Footer";
import LoginContext from "../../Context/LoginContext";
import { useContext, useState } from "react";
import CustomizedProgressBars from "../../Components/CircleLoading/CircleLoading";

const ExpansionPage = () => {
  const { loading } = useContext(LoginContext);
  const [search, setSearch] = useState("");
  
  return loading ? (
    <CustomizedProgressBars />
  ) : (
    <>
      <Navbar setSearch={setSearch} search={search} showSearch={true} />
      <Expansion search={search} />
      <Footer />
    </>
  );
};

export default ExpansionPage;
