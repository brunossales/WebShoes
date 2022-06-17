import { useState } from "react";

import styles from "./Styles/Tenis.module.scss";
import styleNav from "./Styles/Nav.module.scss";

import "./App.scss";
import { ShopContext } from "./Components/Shop";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className={styleNav.nav}>
        <h3>
          <Link to="/">WebShoes</Link>
        </h3>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="shop">Loja</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="shop" element={ <ShopContext /> } />
      </Routes>
    </div>
  );
}

export default App;
