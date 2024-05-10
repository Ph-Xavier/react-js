import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    title: "Comportamento padrão",
    descricao: "Descrição padrão",
  };

  /* Ou 
    Button.defaultProps = {
      title: "Comportamento padrão",
      descricao: "Descrição padrão",
    }:
  */

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.title}-{this.props.descricao}
        <button>{this.props.children}</button>
      </div>
    );
  }
}

export default Button;
