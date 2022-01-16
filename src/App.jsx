
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/app.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoEstado = {
      notas: [...this.state.notas, novaNota]
    }

    this.setState(novoEstado)
  }

  deletarNota(index) {
    console.log(index)
    let notas = [...this.state.notas]
    notas.splice(index, 1)
    this.setState({notas: notas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          deletarNota={this.deletarNota.bind(this)}
          notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
