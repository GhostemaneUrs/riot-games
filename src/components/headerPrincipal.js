import React from "react";
import "./css/styles.css";
import riotLogo from "../img/riot-logo.png";
import { Link } from "react-router-dom";

class HeaderPrincipal extends React.Component {
  render() {
    return (
      <header>
        <div className="container-fluid bg-header">
          <div className="container container-1360 justify-content-between align-items-center d-flex">
            <Link to="/home">
              <img src={riotLogo} className="tm-riot" />
            </Link>
            <div class="pt-20 pb-20 d-flex justify-content-end">
              <div class="btn-group" role="group">
                <Link to="/login">
                  <button
                    class="btn btn-danger btn-lg"
                    id="btn-play"
                    role="button"
                  >
                    Juega ya!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderPrincipal;
