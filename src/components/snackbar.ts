import ToastEnum from '../enums/toast-enum';
import { getId } from '../common';

const snackbar = getId('snackbar');

export function toast(message: string, toastEnum: ToastEnum) {
  if (!snackbar?.classList.contains('show')) {
    snackbar?.classList.add('error');
    if (toastEnum === ToastEnum.Success) {
      snackbar?.classList.add('success');
    }
    (snackbar as HTMLElement).textContent = message;
    snackbar?.classList.add('show');
    const timeout = setTimeout(function () {
      snackbar?.classList.remove('show');
      clearTimeout(timeout);
    }, 3000);
  }
}
