import stylesAbout from "../Styles/About.module.scss";

export function About() {
  return (
    <div className={stylesAbout.about}>
      <section>
        <h1 className={stylesAbout.aboutH1}>
          BEM-VINDO
          <br />
          A PRINCIPAL LOJA DE TÊNIS
          <br />
          DO MUNDO
          <br />
          <span className={stylesAbout.spanSection}>
            E CRIADA POR BRUNO SALES
          </span>
        </h1>
        <div className={stylesAbout.links}>
          <a href="https://www.instagram.com/brunossaless/" target="_blank">
            <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
          </a>
          <a href="https://www.github.com/brunossales" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
          </a>
          <a href="mailto:bruno.particular25@hotmail.com" target="_blank">
            <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />
          </a>
        </div>
      </section>
    </div>
  );
}
