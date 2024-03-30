
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistsState} = useContext(ContextGlobal);


  const renderCards = () => {
    
      return dentistsState.dentistsList.map((dentist) => (
        <Card key={dentist.id} {...dentist} />
      ));
    
  };

  return (
    <div className="home-container">
      <h1>Odontólogos especialistas</h1>

      <div className="card-grid">{renderCards()}</div>
    </div>
  );
}

export default Home