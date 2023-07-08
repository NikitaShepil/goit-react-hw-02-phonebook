import { PhoneBook } from 'components/phonebook/phonebook'
import { Contacts } from 'components/contacts/contscts'
import React, { Component } from 'react';
import css from './app.module.css'

class App extends Component {
  
  state = {
    contacts: [],
    name: '',
    number: '',
    
    
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number') {
      const formattedValue = this.formatNumber(value);
      const isValid = formattedValue.length <= 9;

      if (isValid) {
        this.setState({ [name]: formattedValue });
      } else {
        alert('Номер не може містити більше 9 цифр');
      }
    } else {
      this.setState({ [name]: value });
    }
  };

  formatNumber = (value) => {
    // Видаляємо всі нецифрові символи зі значення
    const numericValue = value.replace(/\D/g, '');

    // Додаємо дефіси між числами
    const formattedValue = numericValue.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');

    return formattedValue;
  };
  
  handleSubmit = (e) => {
    e.preventDefault();

    const existingContact = this.state.contacts.find(contact => contact.name === this.state.name);

    if (existingContact) {
      alert('Контакт з таким ім\'ям уже існує');
      return;
    }

    console.log(this.state);

    const contact = {
      id: Math.random().toString(),
      name: this.state.name,
      number: this.state.number
    };
    
    this.setState((prevState) => ({
      contacts: [...prevState.contacts,contact],
      name: '',
      number: ''
    }
    ));
  };
  handleDeleteContact = (id) => {
    console.log(this.state.contacts)
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };
  render(){
    return (
      <>
      <h1 className={css.phone_book_title}>Phonebook</h1>
      <PhoneBook name={this.state.name} tel={this.state.number} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <h2 className={css.phone_book_title}>Contacts</h2>
      <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact}/>
      </>
      
     );
  }
  
};

export default App
