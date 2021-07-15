import React, { Component } from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHundler = (data) => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHundler} />
      </Container>
    );
  }
}
export default App;
