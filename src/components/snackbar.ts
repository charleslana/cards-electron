import ToastEnum from '../enums/toast-enum';
import { getId } from '../common';

const snackbar = getId('snackbar');

export function toast(message: string, toastEnum: ToastEnum) {
  snackbar?.classList.remove('success', 'error');
  if (toastEnum === ToastEnum.Success) {
    snackbar?.classList.add('success');
  } else {
    snackbar?.classList.add('error');
  }
  (snackbar as HTMLElement).textContent = message;
  if (!snackbar?.classList.contains('show')) {
    snackbar?.classList.add('show');
    const timeout = setTimeout(function () {
      snackbar?.classList.remove('show');
      clearTimeout(timeout);
    }, 3000);
  }
}
