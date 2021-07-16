import React, { Component } from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
