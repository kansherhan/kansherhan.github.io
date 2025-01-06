import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaRegStar,
  FaStar,
  FaTelegram,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

interface INavItem {
  nameTranslationKey: string;
  link: string;
}

interface ISocialItem {
  link: string;
  icon: IconType;
  activeColor: string;
}

interface ISkillItem {
  name: string;
  icon: string;
  rating: number; // 1 - 5
  description: string;
}

interface IPortfolioItem {
  title: string;
  description: string;
  image: string;
}

enum Languages {
  Eng = "en",
  Rus = "ru",
  Kaz = "kz",
}

export const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const portfolio: IPortfolioItem[] = [
    {
      title: "Online fashion store - Homepage",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/portfolio/1.jpg",
    },
    {
      title: "Reebok Store - Concept",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/portfolio/2.png",
    },
    {
      title: "Braun Landing Page - Concept",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/portfolio/3.png",
    },
  ];

  const skills: ISkillItem[] = [
    {
      name: "Photoshop",
      icon: "/svg/skills/photoshop.svg",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Adobe Illustrator",
      icon: "/svg/skills/adobe-illustrator.svg",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Figma",
      icon: "/svg/skills/figma.svg",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Adobe Effect",
      icon: "/svg/skills/adobe-effect.svg",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];

  const socials: ISocialItem[] = [
    {
      link: "https://t.me/kansherhan",
      icon: FaTelegram,
      activeColor: "#28a7e8",
    },
    {
      link: "https://www.instagram.com/kansherhan",
      icon: FaInstagram,
      activeColor: "#fe0266",
    },
    {
      link: "mailto:kansherhan@gmail.com",
      icon: MdEmail,
      activeColor: "#fbbc04",
    },
    {
      link: "https://www.linkedin.com/in/kansherhan",
      icon: FaLinkedin,
      activeColor: "#006699",
    },
  ];

  const headerNavItems: INavItem[] = [
    {
      link: "#home",
      nameTranslationKey: "header.home",
    },
    {
      link: "#about",
      nameTranslationKey: "header.about",
    },
    {
      link: "#skills",
      nameTranslationKey: "header.skills",
    },
    {
      link: "#portfolio",
      nameTranslationKey: "header.portfolio",
    },
    {
      link: "#contact",
      nameTranslationKey: "header.contact",
    },
  ];

  return (
    <div className="app">
      <header className="fixed static@md header container bg:#ffffff00 bg:#ffffff@md h:100vh h:auto@md w:full z-index:100">
        <div className="rel header-inner-container w:full h:full">
          <div
            className="header-menu-wrapper abs top:30px right:-1px d:block d:none@md cursor:pointer bg:#ffffff z-index:101 p:10px|20px|10px|20px border:1px|solid|#212427"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <TfiMenu className="header-menu f:24px" color="#212427" />
          </div>

          <div
            className={
              "header-content rel static@md d:none d:block.active d:block@md w:full h:full h:auto@md bg:#ffffff bg:transparent p:30px p:0|0@md z-index:102" +
              (isMenuOpen ? " active" : "")
            }
          >
            <nav className="header-nav f:32px f:18px@md flex flex:col flex:row@md ai:start ai:center@md jc:space-between border-bottom:none border-bottom:1px|solid|#212427@md p:0|0 p:30px|0@md gap:60px gap:0@md">
              {headerNavItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className="header-nav-item cursor:pointer text:none f:#828282 f:#212427:hover f:semibold text:underline:hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.nameTranslationKey)}
                </a>
              ))}
            </nav>

            <div
              className="abs top:30px right:30px d:block d:none@md cursor:pointer bg:#ffffff"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose className="f:30px" color="#212427" />
            </div>

            <p className="profile-languages abs right:30px right:0@md top:auto top:150px@md bottom:30px bottom:0@md f:21px f:18px@md writing-mode:vertical-rl flex flex:row ai:center gap:5px">
              {Object.keys(Languages).map((lang, index) => (
                <span
                  key={lang}
                  className="flex flex:row ai:center gap:5px uppercase"
                >
                  {index !== 0 && <span>|</span>}

                  <span
                    className={
                      "profile-languages-item cursor:pointer f:bold.active" +
                      (i18n.language ===
                      Languages[lang as keyof typeof Languages]
                        ? " active"
                        : "")
                    }
                    onClick={() =>
                      i18n.changeLanguage(
                        Languages[lang as keyof typeof Languages]
                      )
                    }
                  >
                    {lang}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="profile container bg:#ffffff p:50px|0|30px|0 p:50px|0|100px|0@md"
      >
        <div className="inner-container">
          <div className="profile-info flex flex:col">
            <h1 className="profile-name flex flex:col f:42px mb:10px word-spacing:100vw">
              {t("info.fullName")}
            </h1>

            <p className="profile-description flex flex:col gap:5px">
              <span className="profile-description-item">
                {t("info.profession")}
              </span>
              <span className="profile-description-item">UI/UX Designer</span>
              <span className="profile-description-item">{t("info.age")}</span>
            </p>
          </div>

          <div className="profile-image-container mt:50px">
            <img
              src="/profile.jpeg"
              alt="profile"
              className="profile-image w:full h:450px obj:cover"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="container bg:#F6F6F6 p:60px|0 p:100px|0@md"
      >
        <div className="inner-container flex flex:col ai:center jc:center">
          <h2 className="section-title f:32px mb:50px">{t("header.about")}</h2>

          <div className="flex flex:col ai:center jc:center gap:25px">
            {(t("aboutMe.texts", { returnObjects: true }) as string[]).map(
              (text) => (
                <p key={text} className="text:center">
                  {text}
                </p>
              )
            )}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="container bg:#ffffff p:60px|0 p:100px|0@md"
      >
        <div className="inner-container">
          <h2 className="section-title text:center f:32px mb:30px">
            {t("header.skills")}
          </h2>

          <p className="text:center mb:50px">I work in such programs as</p>

          <div className="skills-list flex flex:row ai:center jc:space-evenly gap:40px|30px flex:wrap">
            {skills.map((item) => (
              <div
                key={item.name}
                className="skills-list-item flex flex:col ai:center gap:20px"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="skills-list-item-icon"
                />

                <p className="skills-list-item-name f:bold">{item.name}</p>

                <p className="skills-list-item-description f:12px f:#828282 lh:1.2 text:center">
                  {item.description}
                </p>

                <div className="skills-list-item-rating flex flex:row ai:center gap:5px">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="skills-list-item-rating-item">
                      {index < item.rating ? <FaStar /> : <FaRegStar />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="container bg:#F6F6F6 p:60px|0 p:100px|0@md"
      >
        <div className="inner-container flex flex:col ai:center jc:center">
          <h2 className="section-title text:center f:32px mb:30px">
            {t("header.portfolio")}
          </h2>

          <div className="portfolio-list flex flex:col ai:center jc:space-evenly gap:50px">
            {portfolio.map((item) => (
              <div key={item.title} className="portfolio-list-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-list-item-image w:full h:auto obj:cover mb:30px border:1px|solid|#212427"
                />

                <div className="portfolio-list-item-info">
                  <p className="portfolio-list-item-title text:center mb:15px f:bold f:24px">
                    {item.title}
                  </p>

                  <p className="portfolio-list-item-description text:center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="container bg:#ffffff p:60px|0 p:100px|0@md"
      >
        <div className="inner-container flex flex:col ai:center jc:center">
          <h2 className="section-title text:center f:32px mb:30px">
            {t("header.contact")}
          </h2>

          <p className="text:center mb:5px">{t("contact.wantToChat")}</p>

          <p className="text:center mb:30px">{t("contact.youAreWelcome")}</p>

          <a
            href="https://t.me/kansherhan?text=Hello Bro"
            className="p:10px|20px bg:#212427 f:#ffffff f:semibold f:18px cursor:pointer border:none r:25px mb:60px text:none border:1px|solid|#212427:hover bg:#ffffff:hover f:#212427:hover"
            target="_blank"
          >
            {t("contact.sendMessage")}
          </a>

          <div className="flex flex:row ai:center gap:25px gap:75px@md">
            {socials.map((item) => (
              <a
                href={item.link}
                key={item.link}
                className={`socials-item f:32px f:45px@md f:#212427 cursor:pointer scale(1.2):hover ~all|100ms|ease-in f:${item.activeColor}:hover`}
                target="_blank"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
