import axios from 'axios';
import config from '../client-config';

export const handleSubmit = (e, pageState) => {
  e.preventDefault();
  const { contactName, contactEmail, contactMessage, interestOneOnOne, interestGroup, interestWorkshop} = pageState;
  axios.post(config.email.apiUrl, {
    type: 'newMessage',
    name: contactName,
    email: contactEmail,
    message: contactMessage,
    interestOneOnOne,
    interestGroup,
    interestWorkshop
  }).then(res => {
    console.log('SUCCESS', res);
  }).catch(err => {
    console.log('ERROR', err);
  });
};