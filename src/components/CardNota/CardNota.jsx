import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete_black.svg";

class CardNota extends Component {

    deletar() {
        const indice = this.props.indice;
        this.props.deletarNota(indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.deletar.bind(this)} />
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;