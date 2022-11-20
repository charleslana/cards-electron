import fs from 'fs';
import path from 'path';
import { setStorage } from './local-storage';

export function translate(location: string) {
  const reqPath = path.join(__dirname, '../');
  const rawData = fs.readFileSync(
    reqPath + `/translations/${location}.json`
  ) as unknown;

  const i18n = JSON.parse(rawData as string);

  console.log(i18n);

  const queryAll = document.querySelectorAll('[data-lang-str]');

  queryAll.forEach(element => {
    const string = element.getAttribute('data-lang-str');
    element.textContent = i18n[string as string];
    if (element.tagName.toLowerCase() === 'input') {
      element.setAttribute('placeholder', i18n[string as string]);
    }
  });
  setStorage('language', location);
}
