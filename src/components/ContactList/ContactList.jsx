import Contact from "../Contact/Contact";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contact_list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

let ContactItem = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactItem),
  onDelete: PropTypes.any,
};
