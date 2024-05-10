import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/Button";

const container = document.getElementById("app");
const root = createRoot(container);

class App extends React.Component {
  render() {
    return (
      <div>
        <Button title="Teste" descricao="asasas">
          Update
        </Button>
      </div>
    );
  }
}

root.render(<App tab="home" />);
