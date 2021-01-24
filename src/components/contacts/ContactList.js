import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2 className={styles.title}>Contacts</h2>

      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.name} className={styles.item}>
            {contact.name}: {contact.number}
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => onDeleteContact(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export default ContactList;
