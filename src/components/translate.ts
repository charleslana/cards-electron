import { getId } from '../common';
import { getStorage } from '../local-storage';
import { translate } from '../i18n';

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
