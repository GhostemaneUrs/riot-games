import React from "react";
import "./css/styles.css";
import akaliImg from "../img/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png";

function Akali() {
  return (
    <div id="akali" className="d-flex justify-content-center akaliBack">
      <div className="container-fluid container-1360">
        <div className="col-md-12">
          <div className="row justify-content-center align-center d-flex mt-30">
            <div className="col-md-6 col-sm-4">
              <img src={akaliImg} className="w-100" alt="" />
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="fz-30 fw-bold text-center white bg-desarr">
                ¿Eres desarrollador de juegos?
              </div>
              <div className="fz-70 fw-bold text-center white f-italic">
                RIOT FORGE
              </div>
              <div className="fz-30 text-center white mt-10">
                Infórmate sobre un trabajo en Riot y se un desarrollador de
                nuestra comunidad
              </div>
              <div className="fz-25 mmt-30 justify-content-center d-flex">
                <a href="https://riotforgegames.com/es_ES/" target="_blank">
                  <button className="btn-desarr fz-30 mb-30">Ver más</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akali;
