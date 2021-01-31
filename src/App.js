import React, { Component } from "react";
import Form from "./components/form";
import ContactList from "./components/contacts";
import Filter from "./components/filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  includContact = (name) => {
    const { contacts } = this.state;
    contacts.forEach((contact) => {
      if (contact.name === name) {
        return window.alert(`${name} is already in contacts.`);
      }
    });
  };

  addContact = (name, number) => {
    const user = {
      id: shortid.generate(),
      name: "",
      number: "",
    };

    user.name = name;
    user.number = Number(number);
    this.setState((prevstate) => {
      this.includContact(name);
      return {
        contacts: [...prevstate.contacts, user],
      };
    });
  };

  deleteContact = (name) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.name !== name),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContact = this.getFilterContacts();
    return (
      <div>
        <Form onAddContact={this.addContact} />

        <Filter value={this.state.filter} onChangeFilter={this.changeFilter} />

        {this.state.contacts.length > 0 && (
          <div>
            <ContactList
              contacts={visibleContact}
              onDeleteContact={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
