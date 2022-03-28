import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';


function App() {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
   }, [contacts])


  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [data, ...prevState]
    );
  };
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactName => {
    setContacts(contacts.filter(contact => contact.name !== contactName)
    );
    
  };

  const visibleContacts = getVisibleContacts();

    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <Form onSubmit={formSubmitHandler} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }


export default App;
