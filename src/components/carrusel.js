import React from "react";
import "./css/styles.css";
import imgUno from "../img/league-newlogo-banner.jpeg";
import imgDos from "../img/Legends-of-Runeterra-Beta-Abierta-2-e1579781989254.jpg";
import imgTres from "../img/valorant.jpg";
import imgCuatro from "../img/tft-tactics.jpg";
import imgCinco from "../img/lol-wild-rift.jpg";

class Carrusel extends React.Component {
  render() {
    return (
      <div className="container container-1360 py-4">
        <div className="px-20 py-20 bg-negro bradius-15">
          <div
            id="carouselRiotGames"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imgUno} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={imgDos} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={imgTres} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={imgCuatro} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={imgCinco} class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselRiotGames"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Atras</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselRiotGames"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
        </div>

        <div class="fz-40 f-italic fw-bold bord-botton mt-20 negro mx-8">
          Juegos destacados
        </div>
      </div>
    );
  }
}
export default Carrusel;
