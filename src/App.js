import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDo from "./components/Todo";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row style={{ height: "15vh" }}>
          <Header sadrzaj={this.sime} />
        </Row>
        <Row style={{ height: "70vh" }}>
          <ToDo />
        </Row>
        <Row style={{ height: "15vh" }} className="bg-info">
          <Footer name="Domagoj" />
        </Row>
      </Container>
    );
  }
}
