import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { kliknut: false };
  }

  obradiKlik() {
    if (this.state.kliknut) {
      this.setState({ kliknut: false });
    } else {
      this.setState({ kliknut: true });
    }
  }

  render() {
    return (
      <Col>
        Footer je izradio {this.props.name} <br />
        <button onClick={() => this.obradiKlik()}>
          {this.state.kliknut ? "Kliknut sam" : "Klikni me"}
        </button>
      </Col>
    );
  }
}
