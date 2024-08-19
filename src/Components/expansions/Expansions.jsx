import { useNavigate } from "react-router-dom";
import "./Expansions.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LoginContext from "../../Context/LoginContext";

const style = {
position: "absolute",
top: "46%",
left: "50%",
transform: "translate(-50%, -50%)",
width: 400,
};

const Expansion = (props) => {
const [zoomCard, setZoomCard] = useState(null);
const { user, loading: loadingContext } = useContext(LoginContext);
const navigate = useNavigate();
const [loading, setLoading] = useState();
const { search } = props;
const [expansions, setExpansions] = useState();
useEffect(() => {
    if (!loadingContext) {
    loadExpansion();
    }
}, []);

useEffect(() => {
    if (!loadingContext) {
    loadExpansion();
    }
}, [user, loadingContext]);

useEffect(() => {
    document.getElementsByClassName("body1")[0].style.overflow =
    zoomCard == null ? "visible" : "hidden";
}, [zoomCard]);

async function loadExpansion() {
    setLoading(true);
    console.log(localStorage.getItem("token"));
    try {
    const response = user
        ? await axios.get(
            process.env.REACT_APP_BACKEND + "/expansions/myExpansion",
            {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            }
        )
        : await axios.get(
            process.env.REACT_APP_BACKEND + "/expansions/AllExpansions",
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
    console.log(response);
    setExpansions(response.data);
    setLoading(false);
    } catch (error) {
    console.log(error);
    setLoading(false);
    }
}

async function color() {
    const data = {
    idCard: zoomCard.id,
    isColor: !zoomCard.mine,
    };
    try {
    const response = await axios.post(
        process.env.REACT_APP_BACKEND + "/expansions/colorCards",
        data,
        {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        }
    );
    setExpansions(response.data);
    setZoomCard(null);
    } catch (error) {}
}

return (
    <div className="container-list1 row g-0">
    <Modal
        open={zoomCard && zoomCard.img != ""}
        onClose={() => setZoomCard(null)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
    >
        <Box sx={{ ...style, width: 400, outline: "none" }}>
        <div className="imgCard">
            <img
            className={
                !user || (user && zoomCard && zoomCard.mine) ? "" : "grayfilter"
            }
            src={zoomCard && "/assets/Cards/" + zoomCard.img}
            ></img>
        </div>
        {user && (
            <div className="modifyPossession">
            <button className="possession" onClick={color}>
                {zoomCard && zoomCard.mine ? "Posseduta" : "Non Posseduta"}
            </button>
            </div>
        )}
        </Box>
    </Modal>

    <div className="container-list row g-0">
        {expansions?.map((expansion) => (
        <div className="expansionList col-sm-12 col-md-12 col-lg-4">
            <img src={"/assets/Expansions/" + expansion.img}></img>
            <div className="modifyCard">
            {expansion.cardResponses
                .sort((a, b) => a.numberCard - b.numberCard)
                .map(
                (card) =>
                    (search === "" ||
                    (search != "" &&
                        card.name
                        .toLowerCase()
                        .includes(search.toLowerCase()))) && (
                    <div
                        className="cardList"
                        onClick={() => {
                        setZoomCard(card);
                        }}
                        style={{
                        transition:
                            "transform 0.2s ease, box-shadow 0.2s ease",
                        cursor: "pointer",
                        }}
                        onMouseEnter={(event) => {
                        event.currentTarget.style.transform = "scale(1.05)";
                        event.currentTarget.style.boxShadow =
                            "0px 4px 8px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(event) => {
                        event.currentTarget.style.transform = "scale(1)";
                        event.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <img
                        className={
                            !user || (user && card.mine) ? "" : "grayfilter"
                        }
                        src={"/assets/Cards/" + card.img}
                        ></img>
                    </div>
                    )
                )}
            </div>
        </div>
        ))}
    </div>
    </div>
);
};

export default Expansion;
