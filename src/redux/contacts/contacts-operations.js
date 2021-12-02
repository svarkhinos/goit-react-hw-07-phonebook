import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchContactsNew,
  addContactsNew,
  deleteContactsNew,
} from '../../Services/contacts-api';

axios.defaults.baseURL = 'https://61a3e279d5e83300172921d8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = fetchContactsNew();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const contacts = addContactsNew({ name, number });
    return contacts;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const contacts = deleteContactsNew(id);

    return contacts;
  },
);

// export const deleteContact = id => dispatch => {
//     dispatch(deleteContactRequest());

//     axios
//       .delete(`/contacts/${id}`)
//       .then(() => dispatch(deleteContactSuccess(id)))
//       .catch(error => dispatch(deleteContactError(error)));
//   };

// export const addContact = (name, number) => dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest);

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };
