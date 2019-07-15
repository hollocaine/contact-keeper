<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFiltered from '../contacts/ContactFiltered';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
=======
import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFiltered from '../contacts/ContactFiltered';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
>>>>>>> c3bf2e9760416230d95a8463188e8c9266996bae
