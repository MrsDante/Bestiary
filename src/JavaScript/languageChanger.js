//import i18n from 'i18next';
import i18n from 'https://deno.land/x/i18next/index.js'
import resources from './locales/languages';

i18n.init({
    lng: 'ru',
    debug: true,
    resources,
  });


const buttonEnglish = document.querySelector('.englishLanguage');
const deadEaters = document.querySelector('.deadeaters');

buttonEnglish.addEventListener('click', async (e) => {
    e.preventDefault();
    await i18n.changeLanguage('ru');
    //buttonRussian.classList.add('btn-outline-primary');
    //buttonEnglish.classList.remove('btn-outline-primary');

    deadEaters.textContent = i18n.t('beast');
    //buttonClicks.textContent = i18n.t('key', { count: clickCounter });
  });

  /*"^21.9.1"*/