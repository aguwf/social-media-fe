/** @format */

import axios from 'axios';
// import * as constants from '../constants'

const getCsrfToken = async () => {
  const { data } = await axios.get('/api/csrf-token');

  axios.defaults.headers['X-CSRF-Token'] = data?.csrfToken;
};

const getData = async (dataSend) => {
  const response = await axios.get(dataSend.url).catch((error) => {
    return new Promise((_resolve, reject) => {
      reject(error);
    });
  });
  return response.data;
};

const addData = async (dataSend) => {
  const response = await axios
    .post(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

const updateData = async (dataSend) => {
  const response = await axios
    .put(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

const patchData = async (dataSend) => {
  const response = await axios
    .patch(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

const deleteData = async (dataSend) => {
  const response = await axios.delete(dataSend.url).catch((error) => {
    return new Promise((_resolve, reject) => {
      reject(error);
    });
  });
  return response;
};

const signin = async (dataSend) => {
  const response = await axios
    .post(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

const logout = async (dataSend) => {
  const response = await axios.post(dataSend.url).catch((error) => {
    return new Promise((_resolve, reject) => {
      reject(error);
    });
  });
  return response;
};

const signup = async (dataSend) => {
  const response = await axios
    .post(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    });
  return response;
};

export {
  getData,
  addData,
  updateData,
  patchData,
  deleteData,
  signin,
  signup,
  logout,
  getCsrfToken,
};
