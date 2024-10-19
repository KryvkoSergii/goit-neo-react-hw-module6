import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialList from "../initialList.json";
import { useState, useEffect } from "react";

function App() {
  const localStorageKey = "contacts-list";
  const [searchQuery, setSearchQuery] = useState("");
  const [contactList, setContactList] = useState(() => {
    var localState = localStorage.getItem(localStorageKey);

    return localState ? JSON.parse(localState) : initialList;
  });

  const onDelete = (id) => {
    setContactList((prevContacts) => {return prevContacts.filter(contact => contact.id != id)});
  };

  const onSearchQuery = (evt) => {
    setSearchQuery(evt.target.value);
  };

  const onAddNew = (newContact) => {
    setContactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const visualContactList = contactList.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  useEffect(() => {
    console.log(contactList);
    localStorage.setItem(localStorageKey, JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddNew} />
      <SearchBox searchQuery={searchQuery} onSearchQuery={onSearchQuery} />
      <ContactList contacts={visualContactList} onDelete={onDelete} />
    </div>
  );
}

export default App;
