import axios from 'axios';
import {BASE_URL} from "../constants";

export const callApi = (url, method = 'get', data) => {
   return axios[method](`${BASE_URL}/${url}`, data);
};