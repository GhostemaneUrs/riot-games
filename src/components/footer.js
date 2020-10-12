import React from "react";
import "./css/styles.css";
import riotLogo from "../img/riot-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <footer className="box-shadow">
        <div className="container-fluid bg-header">
          <div className="container container-1360 d-flex justify-content-center">
            <div className="d-flex justify-content-between align-items-center borde-footer w-100 mb-30">
              <div className="col-4 col-sm-3 col-md-4 pt-20 pb-20">
                <img src={riotLogo} className="tm-riot" />
              </div>
              <div className="col-7 col-sm-4 col-md-4 col-lg-2 d-flex justify-content-between">
                <div className="px-10">
                  <a
                    className="d-flex justify-content-center"
                    href="https://www.facebook.com/RiotGames/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fz-20 color_white"
                      icon={faFacebook}
                    />
                  </a>
                </div>
                <div className="px-10">
                  <a
                    className="d-flex justify-content-center"
                    href="https://www.youtube.com/channel/UCJEGvSZnQ1pkVfHO8s5G8hA"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fz-20 color_white "
                      icon={faYoutube}
                    />
                  </a>
                </div>
                <div className="px-10">
                  <a
                    className="d-flex justify-content-center"
                    href="https://twitter.com/riotgames"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fz-20 color_white "
                      icon={faTwitter}
                    />
                  </a>
                </div>
                <div className="px-10">
                  <a
                    className="d-flex justify-content-center"
                    href="https://www.instagram.com/riotgames/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fz-20 color_white "
                      icon={faInstagram}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="fz-15 mb-30 text-center color_white">
              © 2020 Riot Games. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
