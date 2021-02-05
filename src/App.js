import "./App.scss";
import { useState } from "react";
import Counter from "./component/Counter";
import AddCounter from "./component/AddCounter";

function App() {
  // De base je n'ai qu'un seul compteur d'affiché
  const [counters, setCounters] = useState([0]);
  const tabCounters = [...counters];
  const [error, setError] = useState("");
  return (
    <div className="App">
      {/* quand je clique sur add counter, je souhaite ajouter un nouveau compteur à zéro dans mon stateCounters */}
      <AddCounter
        counters={counters}
        setCounters={setCounters}
        tabCounters={tabCounters}
        error={error}
        setError={setError}
      />

      {/* Pour afficher le bon nombre de compteur, j'utilise une boucle, qui va retourner le nombre de compteur présent dans mon state */}
      <div className="counters">
        {counters.map((elem, index) => {
          return (
            <Counter
              counters={counters}
              setCounters={setCounters}
              tabCounters={tabCounters}
              elem={elem}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
