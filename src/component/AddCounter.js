const AddCounter = ({
  counters,
  setCounters,
  tabCounters,
  error,
  setError,
}) => {
  return (
    <div className="AddCounter">
      <p className="error">{error}</p>
      <button
        onClick={() => {
          // je crée une copie de mon tableau counters
          const tabCounters = [...counters]; //[0]
          if (tabCounters.length > 2) {
            setError("Pas plus de 3 compteurs !");
          } else {
            // Je modifie cette copie de tableau
            tabCounters.push(0); //[0,0] => deux compteurs
            // Je change mon state avec ce nouveau tableau
            setCounters(tabCounters); //[0,0]
          }
        }}
      >
        Add counter
      </button>
    </div>
  );
};

export default AddCounter;
