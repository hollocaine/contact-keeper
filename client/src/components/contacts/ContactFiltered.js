<<<<<<< HEAD
import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFiltered = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFiltered;
=======
<<<<<<< HEAD
import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFiltered = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFiltered;
=======
import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFiltered = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFiltered;
>>>>>>> d6a39df102bc2c80b90e33a3f593e9fd66874318
>>>>>>> c3bf2e9760416230d95a8463188e8c9266996bae
