import React, { Component } from "react";
import Contacts from "./components/Contacts";

import Container from "./components/Container";
import Form from "./components/Form/Form";
import Section from "./components/Section";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  formSubmitHundler = (data) => {
    this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
    console.log("Contacts", this.state.contacts);
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <Container>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHundler} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </Container>
    );
  }
}
export default App;
