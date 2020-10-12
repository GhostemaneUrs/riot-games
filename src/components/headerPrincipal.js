import React from "react";
import "./css/styles.css";
import riotLogo from "../img/riot-logo.png";

function HeaderPrincipal() {
  return (
    <header>
      <div className="container-fluid bg-header">
        <div className="container container-1360 justify-content-between align-items-center d-flex">
          <img src={riotLogo} className="tm-riot" />
          <div class="pt-20 pb-20 d-flex justify-content-end">
            <div class="btn-group" role="group">
              <button
                onclick="location.href='./login.html'"
                class="btn btn-danger btn-lg"
                id="btn-play"
                role="button"
              >
                Juega ya!
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPrincipal;
