import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFiltered from '../contacts/ContactFiltered';

const Home = () => {
  return (
    <div className="grid-2">
      <ContactForm />
      <div>
        <ContactFiltered />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
