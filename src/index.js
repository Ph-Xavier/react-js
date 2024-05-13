import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/Button";

const container = document.getElementById("app");
const root = createRoot(container);

class App extends React.Component {
  state = {
    contador: 0,
  };

  adicionar = () => {
    this.setState({
      contador: this.state.contador++,
    });
  };

  render() {
    return (
      <div>
        contador: {this.state.contador++}
        <Button press={this.adicionar}>Update</Button>
      </div>
    );
  }
}

root.render(<App tab="home" />);
