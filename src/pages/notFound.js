import React from "react";
import notNotFoundImg  from "../img/404.jpg";

class NotFound extends React.Component{
  render(){
    return (
      <div className="align-items-center justify-content-center d-flex error404">
        <img src={notNotFoundImg} alt="404 NotFound" className="error_Image" />
      </div>
    );
  }
}

export default NotFound;