import React from "react";
import "./css/styles.css";
import riotLogo from "../img/riot-logo.png";

function HeaderSecundario() {
  return (
      <header>
      <div className="container-fluid bg-header">
          <div className="col-md-4 pt-20 pb-20 container container-1360">
              <img src={riotLogo} className="tm-riot" />
            </div>
          </div>
      </header>
  );
}

export default HeaderSecundario;
