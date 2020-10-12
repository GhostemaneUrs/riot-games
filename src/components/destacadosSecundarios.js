import React from "react";
import "./css/styles.css";

class DestacadosSecundarios extends React.Component {
  render() {
    return (
      <div className="centrar d-flex col-lg-4 col-md-12 f-colum mb-20">
        <div className="col-md-12 col-sm-10 col-xs-10 overflow-hidden">
          <img src={this.props.img} className="w-100 hover-cont" />
        </div>
        <div className="fz-20 f-italic px-20 py-10 fw-bold negro ">
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default DestacadosSecundarios;
