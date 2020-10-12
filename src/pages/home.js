import React from "react";
import HeaderPrincipal from "../components/headerPrincipal.js";
import Footer from "../components/footer.js";
import Carrusel from "../components/carrusel.js";
import Akali from "../components/akali.js";
import DestacadosPrincipales from "../components/destacadosPrincipales.js";
import DestacadosSecundarios from "../components/destacadosSecundarios.js";

 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPrincipales: [
        {
          id: 1,
          title: "League Of Legends",
          img: "https://i.ibb.co/svDFK7Y/league-newlogo-banner.jpg",
        },
        {
          id: 2,
          title: "Legends Of RuneTerra",
          img:
            "https://i.ibb.co/NV74x6c/Legends-of-Runeterra-Beta-Abierta-2-e1579781989254.jpg",
        },
      ],
      dataSecundarios: [
        {
          id: 3,
          title: "Valorant",
          img: "https://i.ibb.co/0XK2y7j/valorant.jpg",
        },
        {
          id: 4,
          title: "TeamFight Tactics",
          img: "https://i.ibb.co/Jyj3kKK/tft-tactics.jpg",
        },
        {
          id: 5,
          title: "LoL Wild Rift",
          img: "https://i.ibb.co/G2xrtgG/lol-wild-rift.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <HeaderPrincipal />
        <Carrusel />
        <div className="container container-1360">
          <div className="col-md-12 px-20 py-20">
            <div className="row mx-0 w-100 justify-content-between d-flex">
              {this.state.dataPrincipales.map((destacadosPrincipales) => {
                return (
                  <DestacadosPrincipales
                    title={destacadosPrincipales.title}
                    img={destacadosPrincipales.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container container-1360">
          <div className="col-md-12 px-20 py-20 mb-30">
            <div className="row mx-0 w-100 justify-content-between d-flex">
              {this.state.dataSecundarios.map((destacadosSecundarios) => {
                return (
                  <DestacadosSecundarios
                    title={destacadosSecundarios.title}
                    img={destacadosSecundarios.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Akali />
        <Footer />
      </div>
    );
  }
}

export default Home;
