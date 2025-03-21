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
      skills: {
        description:
          "Here are the technologies that help me bring my ideas to life",
      },
      portfolio: {
        ksu: "Business tracking system, graphs, statistics and reports",
        jurichat:
          "Website for obtaining legal assistance using artificial intelligence",
        dhub: "A website for helping people with diabetes",
        istudent:
          "A service for the university, for student interaction and feedback",
      },
      contact: {
        sendMessage: "Send Message",
        wantToChat: "Do you want to learn more or just chat?",
      },
      aboutMe: {
        texts: [
          "I am a frontend and backend developer with 3 years of experience in web development. I build applications using React, TypeScript, Redux, TanStack Query, and Formik on the frontend and NestJS, FastAPI, Go, and PostgreSQL on the backend. I manage service interactions through Nginx and containerize applications using Docker.",
          "I have worked on numerous projects incorporating machine learning, automation, and security technologies.",
          "Previously, I taught web development, conducting a 12-week course covering HTML, CSS, JavaScript, React, Nest.js, and Docker.",
          "I graduated from Satbayev University. I am passionate about AI, full-stack development, and building scalable systems.",
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
      skills: {
        description:
          "Вот технологии, которые помогают мне воплощать идеи в жизнь",
      },
      info: {
        fullName: "Кантаев Шерхан",
        profession: "Frontend Developer и Software Engineer",
        age: "20 лет",
      },
      portfolio: {
        ksu: "Система для слежения за бизнесом, графики, статистика и отчеты",
        jurichat:
          "Сайт для получения юридической помощи с использованием искусственного интеллекта",
        dhub: "Сайт для помощи людей которые страдают диабетом",
        istudent:
          "Сервис для университета, предназначенный для взаимодействия со студентами и получения обратной связи",
      },
      contact: {
        sendMessage: "Отправить сообщение",
        wantToChat: "Хотите узнать больше или просто пообщаться?",
      },
      aboutMe: {
        texts: [
          "Я — фронтенд- и бэкенд-разработчик с 3-летним опытом в веб-разработке. Разрабатываю приложения с использованием React, TypeScript, Redux, TanStack Query, Formik на фронтенде и NestJS, FastAPI, Go, PostgreSQL на бэкенде. Организую взаимодействие сервисов через Nginx и контейнеризую приложения с помощью Docker.",
          "У меня множество проектов, в которых применяются современные технологии, включая машинное обучение, автоматизацию и безопасность.",
          "Ранее преподавал веб-разработку, проводя 12-недельный курс, где обучал HTML, CSS, JavaScript, React, Nest.js и Docker.",
          "Закончил Satbayev University. Увлекаюсь AI, full-stack разработкой и созданием масштабируемых систем.",
        ],
      },
    },
  },

  kz: {
    translation: {
      header: {
        home: "Басты бет",
        about: "Мен жайлы",
        skills: "Менің дағдыларым",
        portfolio: "Менің жұмыстарым",
        contact: "Байланыс",
      },
      info: {
        fullName: "Қантаев Шерхан",
        profession: "Frontend Developer және Software Engineer",
        age: "20 жас",
      },
      skills: {
        description:
          "Міне, маған идеяларды жүзеге асыруға көмектесетін технологиялар",
      },
      portfolio: {
        ksu: "Бизнесті бақылау жүйесі, кестелер, статистика және есептер",
        jurichat:
          "Жасанды интеллектті қолдана отырып заңгерлік көмек алуға арналған сайт",
        dhub: "Қант диабетімен ауыратын адамдарға көмектесетін сайт",
        istudent:
          "Студенттермен өзара әрекеттесуге және кері байланыс алуға арналған университет қызметі",
      },
      contact: {
        sendMessage: "Хабарлама жіберу",
        wantToChat: "Көбірек білгіңіз келе ме, әлде жай сөйлескіңіз келе ме?",
      },
      aboutMe: {
        texts: [
          "Мен 3 жылдық тәжірибесі бар фронтенд және бэкенд әзірлеушімін. Фронтендте React, TypeScript, Redux, TanStack Query, Formik, ал бэкендте NestJS, FastAPI, Go, PostgreSQL қолданамын. Қызметтер арасындағы өзара әрекетті Nginx арқылы басқарамын және қолданбаларды Docker көмегімен контейнерлеймін.",
          "Машиналық оқыту, автоматтандыру және қауіпсіздік технологияларын қолданатын көптеген жобалармен жұмыс істедім.",
          "Бұрын веб-әзірлеу бойынша сабақ бердім, 12 апталық курс өткізіп, HTML, CSS, JavaScript, React, Nest.js және Docker үйреттім.",
          "Satbayev University бітірдім. Жасанды интеллектке, full-stack әзірлеуге және масштабталатын жүйелерді құруға қызығамын.",
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
