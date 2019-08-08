import axios from 'axios';
import config from '../client-config';

export const handleSubmit = (e, pageState, setPageState) => {
  e.preventDefault();
  const { contactName, contactEmail, contactMessage, interestOneOnOne, interestGroup, interestWorkshop, messageSent, error } = pageState;
  if (messageSent || error) {
    return;
  }
  
  axios.post(config.email.apiUrl, {
    type: 'newMessage',
    name: contactName,
    email: contactEmail,
    message: contactMessage,
    interestOneOnOne,
    interestGroup,
    interestWorkshop
  }).then(res => {
    setPageState({ 
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      interestOneOnOne: false,
      interestGroup: false,
      interestWorkshop: false,
      messageSent: true,
    });
    console.log('SUCCESS', res);
  }).catch(err => {
    console.log('ERROR', err);
    setPageState({ error: true });
  });
};