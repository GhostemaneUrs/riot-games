import React from "react";
import "./css/styles.css";

class DestacadosPrincipales extends React.Component {
  render() {
    return (
      <div className="centrar d-flex col-md-12 col-sm-12 col-lg-6 f-colum mb-20">
        <div className="col-sm-10 col-md-12 col-lg-12 overflow-hidden">
          <img src={this.props.img} className="w-100 hover-cont " />
        </div>
        <div class="fz-30 px-20 f-italic py-10 fw-bold negro">
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default DestacadosPrincipales;
