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
      aboutMe: {
        texts: [
          "I am an experienced Frontend developer with over 3 years of experience in creating modern web applications. I specialize in React, TypeScript and modern frameworks, with strong skills in UI/UX design and creating responsive interfaces.",
          "I constantly learn new technologies and follow best development practices. I love solving complex problems and creating innovative solutions, working effectively both independently and in a team.",
          "I have extensive experience working with various APIs and third-party services. I pay special attention to performance and code optimization, which allows me to create fast and reliable applications.",
        ],
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
      aboutMe: {
        texts: [
          "Я опытный Frontend разработчик с более чем 3-летним стажем в создании современных веб-приложений. Специализируюсь на React, TypeScript и современных фреймворках, имею сильные навыки в UI/UX дизайне и создании отзывчивых интерфейсов.",
          "Постоянно изучаю новые технологии и следую лучшим практикам разработки. Люблю решать сложные задачи и создавать инновационные решения, эффективно работая как самостоятельно, так и в команде.",
          "Имею обширный опыт работы с различными API и сторонними сервисами. Уделяю особое внимание производительности и оптимизации кода, что позволяет создавать быстрые и надежные приложения.",
        ],
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
      aboutMe: {
        texts: [
          "Мен 3 жылдан астам тәжірибесі бар Frontend әзірлеуші, заманауи веб-қосымшаларды құрумен айналысамын. React, TypeScript және заманауи фреймворктарға маманданамын, UI/UX дизайн және интерактивті интерфейстер жасауда мықты дағдыларым бар.",
          "Үнемі жаңа технологияларды үйреніп, әзірлеудің үздік тәжірибелерін қолданамын. Күрделі мәселелерді шешуді және инновациялық шешімдер жасауды ұнатамын, жеке де, команда құрамында да тиімді жұмыс істей аламын.",
          "Әртүрлі API-лармен және сыртқы сервистермен жұмыс істеуде үлкен тәжірибем бар. Кодтың өнімділігі мен оңтайландыруына ерекше көңіл бөлемін, бұл жылдам және сенімді қосымшалар жасауға мүмкіндік береді.",
        ],
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
