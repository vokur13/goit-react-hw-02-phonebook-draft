import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log('data', data);
    }, 1000);
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
