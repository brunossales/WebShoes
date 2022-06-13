import { useState } from "react";

import styles from "./Styles/Tenis.module.scss";
import styleNav from "./Styles/Nav.module.scss";

import "./App.scss";
import { Tenis } from "./Components/Shoes";
import { Loja } from "./Components/Shop";
import { About } from "./Components/About";
import { Home } from "./Components/Home";

function App() {
  return (
    <div>
      <nav className={styleNav.nav}>
        <h3>WebShoes</h3>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Loja</a>
      </nav>
      <div className={styles.box}>
        {/* <Loja /> */}
      </div>
      <div>
        {/* <About /> */}
        {/* <Home></Home> */}
      </div>
    </div>
  );
}

export default App;
