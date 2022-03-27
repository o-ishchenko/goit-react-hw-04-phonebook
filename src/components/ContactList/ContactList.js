import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactItem
          name={name}
          id={id}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
