import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const themes = ["light", "dark"];
const Navbar = () => {
  const { themeState, themeDispatch } = useContext(ContextGlobal);
  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <header>
      <div className="container">
        <h1>Clínica odontológica</h1>

        <nav>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

          <ul>
            <li className="desktop-nav">
              {" "}
              <NavLink to="/" end>
                {" "}
                Inicio
              </NavLink>{" "}
            </li>
            <li className="desktop-nav">
              {" "}
              <NavLink to="/contact">Contacto</NavLink>{" "}
            </li>
            <li className="desktop-nav">
              {" "}
              <NavLink to="/favs">Favoritos</NavLink>{" "}
            </li>
          </ul>
        </nav>

        <div className="theme-switch">
          <button onClick={toggleTheme} aria-label="Toggle theme"> light/dark</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
