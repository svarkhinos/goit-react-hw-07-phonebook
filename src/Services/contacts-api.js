import axios from 'axios';

axios.defaults.baseURL = 'https://61a3e279d5e83300172921d8.mockapi.io';

export const fetchContactsNew = () => {
  return axios.get('/contacts').then(r => r.data);
};

export const addContactsNew = ({ name, number }) => {
  const contact = {
    name,
    number,
  };
  return axios.post('/contacts', contact).then(r => r.data);
};

export const deleteContactsNew = id => {
  return axios.delete(`/contacts/${id}`).then(r => r.data);
};

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
