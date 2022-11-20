import { getId } from '../common';

const overlay = getId('overlay');

export function loading(isLoading: boolean) {
  if (isLoading) {
    overlay?.classList.remove('hidden');
    return;
  }
  overlay?.classList.add('hidden');
}
