import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <div className={s.item}>
    <h3>{name}</h3>
    <p>{number}</p>
    <button onClick={() => onDeleteContact(name)}>Delete</button>
  </div>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
