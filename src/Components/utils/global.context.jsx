import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { dentistsReducer, favReducer,themeReducer } from "./reducers";

export const ContextGlobal = createContext(undefined);
const initDentistsState = { dentistsList: [], dentist: {} };
const initFavState = JSON.parse(localStorage.getItem("favs")) || [];

// Tema
const initThemeState = () => {
  const storedTheme = localStorage.getItem("theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const initialTheme = storedTheme || preferredTheme;
  localStorage.setItem("theme", initialTheme);
  return { theme: initialTheme };
};

export const ContextProvider = ({ children }) => {
  // Reductor de tema
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    {},
    initThemeState
  );

  // Actualizacion
  useEffect(() => {
    const root = document.documentElement;
    if (themeState.theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [themeState.theme]);

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // Manejo de odontólogos
  const [dentistsState, dentistsDispatch] = useReducer(
    dentistsReducer,
    initDentistsState
  );

  const fetchDentistsData = () => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        dentistsDispatch({ type: "GET_DENTISTS", payload: res.data })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDentistsData();
  }, []);

  // Reductor de fav
  const [favState, favDispatch] = useReducer(favReducer, initFavState);

  // Actualizacion fav
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);

  return (
    <ContextGlobal.Provider
      value={{
        dentistsState,
        dentistsDispatch,
        favState,
        favDispatch,
        themeState,
        themeDispatch,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
