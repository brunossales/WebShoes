import { useState } from "react";


import styles from "./Styles/Tenis.module.scss";
import styleNav from "./Styles/Nav.module.scss";

import "./App.scss";
import { Tenis } from "./Components/Tenis";

function App() {
  const [urlTenis, seturlTenis] = useState(
    "https://source.unsplash.com/500x500/?shoes"
  );
  return (
    <div>
      <nav className={styleNav.nav}>
        <h3>WebShoes</h3>
      </nav>
      <div className={styles.box}>
        <Tenis
          title="Tênis numero 1"
          desc="Tenis criado por Bruno usando o link da api do unsplash"
          img={urlTenis}
        />

        <Tenis
          title="Tênis numero 2"
          desc="Tenis criado por Bruno usando o link da api do unsplash"
          img={urlTenis}
        />

        <Tenis
          title="Tênis numero 3"
          desc="Tenis criado por Bruno usando o link da api do unsplash"
          img={urlTenis}
        />

        <Tenis
          title="Tênis numero 4"
          desc="Tenis criado por Bruno usando o link da api do unsplash"
          img={urlTenis}
        />

        <Tenis
          title="Tênis numero 5"
          desc="Tenis criado por Bruno usando o link da api do unsplash"
          img={urlTenis}
        />
      </div>
    </div>
  );
}

export default App;
