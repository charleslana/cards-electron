import { getId } from '../common';
import { getStorage, setStorage } from '../local-storage';

const toggleBtn = getId('toggleBtn');
const theme = getId('theme');
let darkMode = getStorage('dark-mode');

const enableDarkMode = () => {
  theme?.classList.add('dark-mode-theme');
  toggleBtn?.setAttribute('checked', 'checked');
  setStorage('dark-mode', 'enabled');
};

const disableDarkMode = () => {
  theme?.classList.remove('dark-mode-theme');
  toggleBtn?.removeAttribute('checked');
  setStorage('dark-mode', 'disabled');
};

toggleBtn?.addEventListener('click', () => {
  darkMode = getStorage('dark-mode');
  if (darkMode === null || darkMode === 'disabled') {
    enableDarkMode();
    return;
  }
  disableDarkMode();
});

if (darkMode === 'enabled') {
  enableDarkMode();
}
