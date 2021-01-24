import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();

  handleCenge = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  render() {
    return (
      <div>
        <h2 className={styles.title}>Phonebook</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label
            className={styles.label}
            htmlFor={this.inputNameId}
            name="name"
          >
            Name
          </label>
          <input
            className={styles.input}
            id={this.inputNameId}
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter Name"
            onChange={this.handleCenge}
          ></input>

          <label
            className={styles.label}
            htmlFor={this.inputNumberId}
            name="number"
          >
            Number
          </label>
          <input
            className={styles.input}
            id={this.inputNumberId}
            type="phone"
            value={this.state.number}
            name="number"
            placeholder="Enter Number"
            onChange={this.handleCenge}
          ></input>

          <button className={styles.addBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default Form;
