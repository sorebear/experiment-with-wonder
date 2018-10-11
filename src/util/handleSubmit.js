import axios from 'axios';
import config from '../client-config';

export const handleSubmit = (e) => {
  e.preventDefault();
  const { contactName, contactEmail, contactMessage, interestOneOnOne, interestGroup, interestWorkshop} = this.state;
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