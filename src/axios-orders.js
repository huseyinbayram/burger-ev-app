import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-ev-app.firebaseio.com'
});

export default instance;
