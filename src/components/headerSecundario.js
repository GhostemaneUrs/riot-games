import React from "react";
import "./css/styles.css";
import riotLogo from "../img/riot-logo.png";
import { Link } from "react-router-dom";

class HeaderSecundario extends React.Component {
  render() {
    return (
      <header>
        <div className="container-fluid bg-header">
          <div className="col-md-4 pt-20 pb-20 container container-1360">
            <Link to="/home">
              <img src={riotLogo} className="tm-riot" />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderSecundario;
