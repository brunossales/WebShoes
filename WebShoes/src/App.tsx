import styleNav from "./Styles/Nav.module.scss";

import "./App.scss";
import { Shop} from "./Components/Shop";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import { CreateShoe } from "./Components/CRUD/CreateShoe";
import { EditShoe } from "./Components/CRUD/EditShoe";

function App() {
  return (
    <div>
      <nav className={styleNav.nav}>
        <h3>
          <Link to="/">WebShoes</Link>
        </h3>
        <Link to="/">Início</Link>
        <Link to="about">Sobre</Link>
        <Link to="shop">Loja</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="createShoe" element={ <CreateShoe /> } />
        <Route path="editeShoe/:id" element={ <EditShoe />} />
      </Routes>
    </div>
  );
}

export default App;
