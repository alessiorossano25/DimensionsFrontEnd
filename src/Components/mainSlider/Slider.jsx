import "./Slider.css";
import image1 from "../../assets/slider1.webp";
import image2 from "../../assets/slider2.webp";
import image3 from "../../assets/slider3.webp";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img className="slides img-fluid" src={image1} alt="prima slide"></img>
        <Carousel.Caption>
          <h3 className="testo-slider">
            Fiamme Ardenti: Esplosioni Celesti 
          </h3>
          <p className="testo-slider">
            Entra nel cuore infuocato dell'avventura, dove il potere delle
          fiamme prende vita
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img className="slides" src={image2} alt="seconda slide"></img>
        <Carousel.Caption>
          <h3 className="testo-slider">Cercatori del futuro: Connessioni Cibernetiche</h3>
          <p className="testo-slider">
            Scopri un mondo di innovazione e avventura nella nuova era
            tecnologica
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img className="slides" src={image3} alt="terza slide"></img>
        <Carousel.Caption>
          <h3 className="testo-slider">Valle d'Incanto: Segreti Nascosti </h3>
          <p className="testo-slider">
            Esplora le meraviglie nascoste nella Valle, dove il mistero si
            intreccia con la natura
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
