
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";



const Card = ({ name, username, id }) => {
// Gestion fav
const { favState, favDispatch } = useContext(ContextGlobal);

// Comprobamos
const isFav = favState.some((fav) => fav.id === id);

// Manejo del evento del boton
const FavClick = (e) => {
  e.stopPropagation();
  if (isFav) {
    favDispatch({ type: "DELETE_FAV", payload: id });
  } else {
    alert('Dentista agregado a favoritos correctamente')
    favDispatch({ type: "ADD_FAV", payload: { name, username, id } });
  }
};


  return (
    <div className="card">
    
     <Link  to={`/detail/${id}`}>
        <img  src="./images/doctor.jpg" className="card-img"/>
        <p>{name}</p>
        <p>User: {username}</p>
      </Link>
     
        <button onClick={FavClick} className="favButton"> {isFav ? "Quitar favorito" : "Agregar favorito"}</button>
    </div>
  );
};


export default Card;
