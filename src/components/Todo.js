import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imeKorisnika: "Domagoj",
      listaZadataka: [
        { akcija: "Naučiti React props i stanja !", obavio: false },
      ],
      noviZadatak: "",
    };
  }
  updateListe = () => {
    this.setState({
      listaZadataka: [
        ...this.state.listaZadataka,
        { akcija: this.state.noviZadatak, obavio: false },
      ],
    });
  };

  obavljenZadatak = (zadatak) =>
    this.setState({
      listaZadataka: this.state.listaZadataka.map((item) =>
        item.akcija === zadatak.akcija
          ? { ...item, obavio: !item.obavio }
          : item
      ),
    });
  ispisZadataka = () =>
    this.state.listaZadataka.map((item) => (
      <tr key={item.akcija}>
        <td>{item.akcija}</td>
        <td>
          <input
            type="checkbox"
            checked={item.obavio}
            onChange={() => this.obavljenZadatak(item)}
          />
        </td>
      </tr>
    ));

  updateZadatak = (event) => {
    this.setState({ noviZadatak: event.target.value });
  };

  render = () => {
    return (
      <Col md={"12"} className="container">
        <form>
          <input
            className="form-control"
            value={this.state.noviZadatak}
            onChange={(event) => this.updateZadatak(event)}
          />
          <Button variant="primary" onClick={this.updateListe}>
            + Dodaj
          </Button>
        </form>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th> {this.state.imeKorisnika}, ovo je tvoj popis zadataka</th>
              </tr>
            </thead>
            <tbody>{this.ispisZadataka()}</tbody>
          </table>
        </div>
      </Col>
    );
  };
}
