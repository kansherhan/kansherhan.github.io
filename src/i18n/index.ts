import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        about: "About",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      info: {
        fullName: "Kantaev Sherhan",
        profession: "Frontend Developer and Software Engineer",
        age: "20 years old",
      },
      contact: {
        sendMessage: "Send Message",
        wantToChat: "Want to know more or just chat?",
        youAreWelcome: "You are welcome!",
      },
    },
  },
  ru: {
    translation: {
      header: {
        home: "Главная",
        about: "Обо мне",
        skills: "Мои навыки",
        portfolio: "Мои проекты",
        contact: "Контакты",
      },
      info: {
        fullName: "Кантаев Шерхан",
        profession: "Frontend Developer и Software Engineer",
        age: "20 лет",
      },
      contact: {
        sendMessage: "Отправить сообщение",
        wantToChat: "Хотите узнать больше или просто пообщаться?",
        youAreWelcome: "Вы приветствуете!",
      },
    },
  },
  kz: {
    translation: {
      header: {
        home: "Басты бет",
        about: "Мен жайым",
        skills: "Менің білімдерім",
        portfolio: "Менің жұмыстарым",
        contact: "Байланыс",
      },
      info: {
        fullName: "Қантаев Шерхан",
        profession: "Frontend Developer және Software Engineer",
        age: "20 жас",
      },
      contact: {
        sendMessage: "Хабарлама жіберу",
        wantToChat: "Біздің туралы білгіңіз келе ме?",
        youAreWelcome: "Сізге сәлем!",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
