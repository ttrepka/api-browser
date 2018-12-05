import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const ApiClient = axios.create({
  baseURL: API_BASE_URL
});

export default ApiClient;
