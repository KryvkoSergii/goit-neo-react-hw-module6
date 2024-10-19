import PropTypes from "prop-types";
import Icons from "../../assets/icon.svg";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contact_panel} id={"contact-" + contact.id}>
      <div>
        <div className={css.contact_field}>
          <svg>
            {" "}
            <use xlinkHref={`${Icons}#user`}></use>
          </svg>
          {contact.name}
        </div>
        <div className={css.contact_field}>
          <svg>
            {" "}
            <use xlinkHref={`${Icons}#phone`}></use>
          </svg>
          {contact.number}
        </div>
      </div>
      <div>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
}

let ContactItem = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
});

Contact.propTypes = {
  contact: ContactItem,
  onDelete: PropTypes.any,
};
