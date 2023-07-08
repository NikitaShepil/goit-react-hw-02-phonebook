
import React from 'react'
import css from './phonebook.module.css'
export function PhoneBook ({handleChange,handleSubmit, name,tel}){
    return (<form onSubmit={handleSubmit}><input
    className={css.name_input}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      /><input
      className={css.tel_input}
      type="tel"
      name="number"
    //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={tel}
        onChange={handleChange}

    />
      <button type='submit' >Add Contact</button></form>)
}