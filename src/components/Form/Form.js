import React, { Component } from "react";
import { nanoid } from 'nanoid';
import s from './Form.module.css'

class Form extends Component { 
    state = {
        name: '',
        id: '',
        number: '',
    }

    handleNameChange = event => {
    const { id, value } = event.currentTarget;
    this.setState({ name: value, id: id});
    };

    handleNumberChange = event => {
    const { value } = event.currentTarget;
    this.setState({ number: value });
    };

    handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    };
    
    reset = () => {
    this.setState({ name: '', id: '', number: ''});
    };
    
    render() { 
    let nameId = nanoid();
    let numberId = nanoid();
    return (
    <form className={s.form} onSubmit = { this.handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
            className={s.input }
            type="text"
            name="name"
            id={nameId}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
                
            />
        <label htmlFor={numberId}>Number</label>
        <input
            className={s.input }
            type="tel"
            name="number"
            id={numberId}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleNumberChange}
        />
        <button className={s.button} type="submit">
            Add contact
        </button>
      </form>
        )

    }
}

export default Form;