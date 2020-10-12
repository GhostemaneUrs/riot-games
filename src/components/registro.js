import React from "react";
import "./css/styles.css";
import backRegistro from "../img/backRegistro.jpg";


class Registro extends React.Component {
  state = {};
  render() {
    const { typeOfFocused } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12 col-12 styleImg"
            style={{
              backgroundImage: `url(${backRegistro})`,
            }}
          ></div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center styleTabla">
            <div
              className="registro-form justify-content-center d-flex flex-column align-items-center"
              id="contenedorRegistro"
            >
              <div className="w-100 mt-3">
                <h1 className="pt-10 fw-bold textoJuega">
                  ¡Juega con nosotros!
                </h1>
              </div>
              <form className="col-lg-10 col-md-10 col-sm-10 col-xs-11">
                <div className="form-group pt-10">
                  <input
                    className="inputs"
                    type="email"
                    id="correoElectronico"
                    placeholder="Correo electronico*"
                    required
                  />
                </div>
                <div className="form-group pt-10">
                  <input
                    className="inputs"
                    type="password"
                    id="contraseña"
                    placeholder="Contraseña*"
                    required
                  />
                </div>
                <div className="form-group pt-10">
                  <input
                    className="inputs"
                    placeholder="Fecha de nacimiento*"
                    type={typeOfFocused || "text"}
                    onFocus={() => this.setState({ typeOfFocused: "date" })}
                    onBlur={() => this.setState({ typeOfFocused: "text" })}
                    required
                  />
                </div>
                <div className="pt-20 pb-20 fz-16 d-flex flex-column align-items-center">
                  <input
                    className="registrate"
                    type="submit"
                    name="Registrate"
                    value="Registrate"
                  ></input>
                </div>
                <div className="fw-bold fz-16 pb-30 align-items-center flex-column d-flex text-center">
                  <p>
                    Al registrarse, acepta nuestros Términos de uso y Política
                    de privacidad.
                  </p>
                  <p>
                    ¿Ya tiene una cuenta?
                    <a className="link" href="./login.html" target="_blank">
                      Inicia Sesion
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
