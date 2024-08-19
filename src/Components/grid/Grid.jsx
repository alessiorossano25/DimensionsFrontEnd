import "./Grid.css";
import grid1 from "../../assets/grid1.webp";
import grid2 from "../../assets/grid2.webp";

const Grid = () => {
return (
    <div className="row g-0 mt-5">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 my-4 selector1 bg-dark text-center text-white overflow-hidden">
        <div className="mt-2">
        <h2 className="title display-5 py-1">Presto in arrivo</h2>
        <img
            className="grid-img"
            src={grid1}
            alt="novità"
        ></img>
        <p className="testo-grid mt-2">
            Giudizio dei Ribelli in arrivo nella prossima espansione
        </p>
        </div>
    </div>
    <div className=" my-4 col-xs-12 col-sm-12 col-md-12 col-lg-6 selector2 bg-dark text-center text-white overflow-hidden ">
        <div className="mt-2">
        <h2 className="title display-5 py-1">Prova il gioco</h2>
        <img
            className="grid-img"
            src={grid2}
            alt="una sezione che riporta al gioco Dimensions"
        ></img>
        <p className="testo-grid mt-2">Sperimenta Dimensions con gli amici nel nuovo gioco online</p>
        </div>
    </div>
    </div>
);
};

export default Grid;
