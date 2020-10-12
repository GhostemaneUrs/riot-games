import React from "react";
import IniciarSesion from "../components/iniciarSesion.js";
import Footer from "../components/footer.js";
import HeaderSecundario from "../components/headerSecundario.js";

class Login extends React.Component {
  render() {
    return (
      <div>
        <HeaderSecundario />
        <IniciarSesion />
        <Footer />
      </div>
    );
  }
}

export default Login;
