import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  /*
  static defaultProps = {
    title: "Comportamento padrão",
    descricao: "Descrição padrão",
  };

   Ou 

    Button.defaultProps = {
      title: "Comportamento padrão",
      descricao: "Descrição padrão",
    }:
  */

  render() {
    return <button onClick={this.props.press}>{this.props.children}</button>;
  }
}

export default Button;
