import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}:{contact.number}
          <button onClick={() => onDelete(contact.id)} className={styles.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
