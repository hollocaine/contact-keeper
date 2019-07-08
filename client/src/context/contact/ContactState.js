import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Alan flynn',
        email: 'alan@gmail.com',
        phone: '4564654',
        type: 'professional'
      },
      {
        id: 2,
        name: 'Peter Ben',
        email: 'pb@gmail.com',
        phone: '648946',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Jane Dope',
        email: 'jd@gmail.com',
        phone: '123456',
        type: 'amateur'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Delete contact
  //Set current contact
  //Clear Current contact
  //Update contact
  //Filter contacts
  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
