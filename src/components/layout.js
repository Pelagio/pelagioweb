import React from "react";
import Container from "../components/container";

class Template extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Template;
