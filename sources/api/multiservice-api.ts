import axios from 'axios';

const baseURL = 'https://ppvcraft.site/api/';

const multiservceApi = axios.create({baseURL});

export default multiservceApi;
