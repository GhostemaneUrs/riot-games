import React from "react";
import Registro from "../components/registro.js"
import Footer from "../components/footer.js";
import HeaderSecundario from "../components/headerSecundario.js";


class Registry extends React.Component {
  render() {
    return(
      <div>
        <HeaderSecundario/>
        <Registro/>
        <Footer/>
      </div>
    )
  }
}

export default Registry;