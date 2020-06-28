import React from "react";
import Container from "../components/container";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return <Container>{children}</Container>;
  }
}

export default Template;
