import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <div className={s.item}>
    <h3>{name}</h3>
    <p>{number}</p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </div>
);
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
