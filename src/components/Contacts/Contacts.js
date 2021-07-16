import React, { Component } from "react";
import PropTypes from "prop-types";

const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <p>{contact.name}</p>
      ))}
    </ul>
  );
};

export default Contacts;
