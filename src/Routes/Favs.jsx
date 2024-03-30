import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favState } = useContext(ContextGlobal);

  const renderFavCards = () => {
    if (favState.length > 0) {
      return favState.map((dentist) => <Card key={dentist.id} {...dentist} />);
    } else {
      return (
        <p>
          Debes añadir un dentista <br /> Intenta agregar uno.
        </p>
      );
    }
  };

  return (
    <div className="favs-container">
      <h1>Tus especialistas favoritos:</h1>
      <div className="card-grid">{renderFavCards()}</div>
    </div>
  );
};

export default Favs;
