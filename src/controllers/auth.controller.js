import axios from 'axios';
export const RegisterUser = async (data) => {
  let url = process.env.REACT_APP_URL + 'register';
  console.log('##URL: ', url);
  try {
    let response = await axios.post(url, data);
    console.log('Response: ', response.data);
    const dataR = response.data.message;
    console.log('DataR: ', dataR);
    localStorage.setItem('JWT', dataR.token);
    return dataR.user;
  } catch (err) {
    console.log('Error: ', err);
    throw err.response.data;
  }
};
export const AuthenticateUser = async () => {
  let url = process.env.REACT_APP_URL + 'authenticate';
  try {
    let token = localStorage.getItem('JWT');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let response = await axios.get(url, config);
    console.log('Response: ', response.data);
    const dataR = response.data.message;
    return dataR;
  } catch (err) {
    console.log('Error: ', err);
    throw err.response.data;
  }
};

export const LogoutUser = async () => {
  let url = process.env.REACT_APP_URL + 'logout';
  console.log('URL: ', url);
  try {
    let token = localStorage.getItem('JWT');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let response = await axios.get(url, config);
    console.log('Response: ', response.data);
    const dataR = response.data.message;
    localStorage.removeItem('JWT');
    return dataR;
  } catch (err) {
    console.log('Error: ', err);
    throw err.response.data;
  }
};

export const LoginUser = async (data) => {
  let url = process.env.REACT_APP_URL + 'login';
  console.log('##URL: ', url);
  try {
    let response = await axios.post(url, data);
    console.log('Response: ', response.data);
    const dataR = response.data.message;
    console.log('DataR: ', dataR);
    localStorage.setItem('JWT', dataR.token);
    return dataR.user;
  } catch (err) {
    console.log('Error: ', err);
    throw err.response.data;
  }
};
export const GetUser = async () => {
  let url = process.env.REACT_APP_URL + 'getUser';
  try {
    let token = localStorage.getItem('JWT');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let response = await axios.get(url, config);
    console.log('Response: ', response.data);
    const dataR = response.data.message;
    return dataR;
  } catch (err) {
    console.log('Error: ', err);
    throw err.response.data;
  }
};
