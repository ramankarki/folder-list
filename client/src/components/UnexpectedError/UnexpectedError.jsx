import React from "react";
import ReactDOM from "react-dom";

import "./UnexpectedError.scss";

class UnexpectedError extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="dim-background">
        <section style={{color: "white"}}>this is unexpectederror</section>
      </div>,
      document.getElementById("unexpected-error")
    );
  }
}

export default UnexpectedError;
