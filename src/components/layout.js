import React from "react";
import base from "./base.css";
import Container from "../components/container";
import Navigation from "../components/navigation";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    );
  }
}

export default Template;
