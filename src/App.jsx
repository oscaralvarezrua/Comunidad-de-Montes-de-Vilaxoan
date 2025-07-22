import { useTranslation } from "react-i18next";
import "./App.css";
import React from "react";
import ImageGallery from "./components/ImageGallery";
import FadeOnScroll from "./components/FadeOnScroll";

const ESCUDO_URL = "/vilaxoan/escudo-vilaxoan.png"; // Usar la misma imagen para header y footer
const MAPS_URL = "https://maps.app.goo.gl/G64HZ7yZG8odVSDc6";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src={ESCUDO_URL} alt="Escudo" className="escudo" />
        <h1>{t("header.title")}</h1>
        <div className="lang-switcher">
          <button onClick={() => i18n.changeLanguage("es")} className="btn-espana">
            <img src="/vilaxoan/5353-espana.png" alt="Español" className="icon-espana" />
          </button>
          <button onClick={() => i18n.changeLanguage("gl")} className="btn-galicia">
            <img src="/vilaxoan/5353-galicia.png" alt="Gallego" className="icon-galicia" />
          </button>
        </div>
      </header>

      <FadeOnScroll>
        <section id="presentation" className="section">
          <h2>{t("presentation.title")}</h2>
          <p>{t("presentation.text")}</p>
        </section>
      </FadeOnScroll>

      <FadeOnScroll>
        <section id="history" className="section">
          <h2>{t("history.title")}</h2>
          <p>{t("history.text")}</p>
        </section>
      </FadeOnScroll>

      <FadeOnScroll>
        <section id="objectives" className="section">
          <h2>{t("objectives.title")}</h2>
          <p>{t("objectives.text")}</p>
        </section>
      </FadeOnScroll>

      <FadeOnScroll>
        <section id="images" className="section images-section">
          <h2>{t("images.title")}</h2>
          <ImageGallery />
        </section>
      </FadeOnScroll>

      <FadeOnScroll>
        <section id="location" className="section location-section">
          <h2>{t("location.title")}</h2>
          <img src={ESCUDO_URL} alt="Escudo" className="escudo-large" />
          <p>{t("location.description")}</p>
          <ul>
            <li>{t("location.population")}</li>
            <li>{t("location.area")}</li>
            <li>{t("location.gentilicio")}</li>
          </ul>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
            {t("location.map")}
          </a>
        </section>
      </FadeOnScroll>

      <FadeOnScroll>
        <section id="join" className="section join-section">
          <h2>{t("join.title")}</h2>
          <button className="join-btn">{t("join.button")}</button>
        </section>
      </FadeOnScroll>

      <footer className="landing-footer">
        <img src="/vilaxoan/escudo-vilaxoan.png" alt="Escudo de Vilaxoán" className="escudo-footer" />
        <p>© Comunidad de Montes de Vilaxoán</p>
      </footer>
    </div>
  );
}

export default App;
