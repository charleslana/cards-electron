import api from '../config/api';
import IError from '../interfaces/IError';
import IResponse from '../interfaces/IResponse';
import ToastEnum from '../enums/toast-enum';
import { getId, getSelectorAll } from '../common';
import { loading } from './loading';
import { toast } from './snackbar';

const login = getId('login');
const loginButton = getId('loginButton');
const register = getId('register');
const registerButton = getId('registerButton');
const tabs = getSelectorAll('.tab > button');
const loginOk = getId('loginOk');
const registerOk = getId('registerOk');
const loginUsername = getId('loginUsername') as HTMLInputElement;
const loginPassword = getId('loginPassword') as HTMLInputElement;
const registerUsername = getId('registerUsername') as HTMLInputElement;
const registerPassword = getId('registerPassword') as HTMLInputElement;
const registerConfirmPassword = getId(
  'registerConfirmPassword'
) as HTMLInputElement;

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
    const response = await api.post('/user/login', {
      username: loginUsername.value,
      password: loginPassword.value,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
    const error = err as IError;
    if (error.response == null) {
      toast(error.message, ToastEnum.Error);
      return;
    }
    toast(error.response.data.message ?? 'No message', ToastEnum.Error);
  } finally {
    loading(false);
  }
});

registerOk?.addEventListener('click', async () => {
  if (registerPassword.value !== registerConfirmPassword.value) {
    toast('Senhas digitadas diferentes', ToastEnum.Error);
    return;
  }
  loading(true);
  try {
    const response = await api.post('/user', {
      username: registerUsername.value,
      password: registerPassword.value,
    });
    const data = response.data as IResponse;
    toast(data.message, ToastEnum.Success);
    clearRegister();
  } catch (err) {
    const error = err as IError;
    if (error.response == null) {
      toast(error.message, ToastEnum.Error);
      return;
    }
    toast(error.response.data.message ?? 'No message', ToastEnum.Error);
  } finally {
    loading(false);
  }
});

function clearRegister() {
  loginUsername.value = registerUsername.value;
  loginPassword.value = registerPassword.value;
  registerUsername.value = '';
  registerPassword.value = '';
  registerConfirmPassword.value = '';
  loginButton?.click();
}
