import { getId } from '../common';
import { getStorage, setStorage } from '../local-storage';
import { translate } from '../i18n';
require('../components/login');

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

let language = getStorage('language');

const userLang = window.navigator.language.split('-');

if (language == null) {
  language = userLang[0];
}

translate(language);

const selectLanguage = getId('selectLanguage');

selectLanguage?.addEventListener('change', () => {
  const language = (selectLanguage as HTMLInputElement).value;
  translate(language);
});

[...(selectLanguage as HTMLSelectElement).options].map(
  e => (e.selected = e.value == language)
);
