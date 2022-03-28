import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let nameId = nanoid();
  let numberId = nanoid();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, number };
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        className={s.input}
        type="text"
        name="name"
        id={nameId}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
      />
      <label htmlFor={numberId}>Number</label>
      <input
        className={s.input}
        type="tel"
        name="number"
        id={numberId}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
