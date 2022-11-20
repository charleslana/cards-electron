import { getId, getSelectorAll } from '../common';

const login = getId('login');
const loginButton = getId('loginButton');
const register = getId('register');
const registerButton = getId('registerButton');
const tabs = getSelectorAll('.tab > button');

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
