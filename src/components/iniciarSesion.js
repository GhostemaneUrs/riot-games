import React from "react";
import "./css/styles.css";
import backLogin from "../img/backlogin.jpg";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div
        className="container-fluid styleLogin"
        style={{
          backgroundImage: `url(${backLogin})`,
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center flex-colum">
            <div class="w-100 max-630" id="login">
              <div class="pb-30">
                <p class="h1 text-center" id="login-title">
                  Iniciar sesión
                </p>
              </div>
              <div className="form-group justify-content-center align-items-center w-100">
                <form role="form">
                  <div className="form-group pb-10 d-flex justify-content-center align-items-center">
                    <input
                      type="text"
                      class="input-login form-control"
                      placeholder="Nombre de usuario"
                      required
                    />
                  </div>
                  <div className="form-group pb-10 d-flex justify-content-center align-items-center">
                    <input
                      type="password"
                      className="input-login form-control"
                      placeholder="Contraseña"
                      required
                    />
                  </div>
                  <div className="form-group form-check mantenerSesion">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label" id="login-check">
                      Mantener sesión iniciada
                    </label>
                  </div>
                  <div className="text-center mt-30">
                    <button
                      className="btn btn-light btn-lg"
                      type="submit"
                      name="Iniciar"
                      id="submit-btn "
                    >
                      Iniciar
                    </button>
                  </div>
                  <div class="mt-20">
                    <div class="px-10">
                      <a
                        href="#"
                        class="d-flex justify-content-center"
                        target="#"
                      >
                        ¿No puedes iniciar sesión?
                      </a>
                    </div>
                    <div class="px-10">
                      <Link
                        to="/registry"
                        class="d-flex justify-content-center"
                      >
                        Crear cuenta
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
