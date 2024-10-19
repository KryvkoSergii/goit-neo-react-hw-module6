import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, selectNameFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const searchQuery = useSelector(selectNameFilter);
  return (
    <ul className={css.contact_list}>
      {contacts
        .filter((contact) =>
          contact.name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()))
        .map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
}