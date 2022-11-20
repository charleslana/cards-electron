import api from '../config/api';
import { getId, getSelectorAll } from '../common';
import { loading } from './loading';

const login = getId('login');
const loginButton = getId('loginButton');
const register = getId('register');
const registerButton = getId('registerButton');
const tabs = getSelectorAll('.tab > button');
const loginOk = getId('loginOk');
const registerOk = getId('registerOk');

loginButton?.addEventListener('click', () => {
  tabs.forEach(tab => tab.classList.remove('button-selected'));
  login?.classList.remove('hidden');
  register?.classList.add('hidden');
  loginButton?.classList.add('button-selected');
});

registerButton?.addEventListener('click', () => {
  tabs.forEach(tab => tab.classList.remove('button-selected'));
  register?.classList.remove('hidden');
  login?.classList.add('hidden');
  registerButton?.classList.add('button-selected');
});

loginOk?.addEventListener('click', async () => {
  loading(true);
  try {
    const response = await api.get('/login');
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading(false);
  }
});

registerOk?.addEventListener('click', () => {
  loading(true);
  const interval = setInterval(() => {
    loading(false);
    clearInterval(interval);
  }, 3000);
});
