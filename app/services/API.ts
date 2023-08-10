import axios, {AxiosInstance} from 'axios';
import {ApiCallError} from '../constants';
import {customAlert} from '../utils';

// Base Url configured
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://reqres.in/api/users',
});

// Fetch Data
export const getData = async (endPoint: number) => {
  try {
    const response = await axiosInstance.get(`?page=${endPoint}`);
    return response;
  } catch (err) {
    customAlert({title: ApiCallError.title, desc: ApiCallError.desc});
  }
};
