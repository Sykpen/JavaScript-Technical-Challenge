import React, { Component } from "react";

class Circle extends Component {
  setColor() {
    if (this.props.language === "HTML") {
      return "circle red";
    } else if (this.props.language === "JavaScript") {
      return "circle yellow";
    } else {
      return "circle magenta";
    }
  }

  render() {
    return <div className={this.setColor()}></div>;
  }
}

export default Circle;
