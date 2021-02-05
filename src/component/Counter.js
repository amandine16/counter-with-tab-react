const Counter = ({ counters, setCounters, tabCounters, elem, index }) => {
  return (
    <div className="oneCounter">
      <div className="lesBtns">
        <button
          style={{ opacity: elem >= 10 && "0" }}
          onClick={() => {
            // je souhaite modifier la valeur du compteur
            const tabCounter = [...counters]; //[0]
            // je cible le compteur en question
            tabCounter[index] = tabCounter[index] + 1;
            // je change le state du compteur
            setCounters(tabCounter);
          }}
        >
          +
        </button>
        <button className="count">{elem}</button>
        <button
          style={{ opacity: elem <= 0 && "0" }}
          onClick={() => {
            const tabCounter = [...counters];
            tabCounter[index] = tabCounter[index] - 1;
            setCounters(tabCounter);
          }}
        >
          -
        </button>
      </div>
      <div className="reset">
        <button
          onClick={() => {
            const tabCounter = [...counters];
            tabCounter[index] = 0;
            setCounters(tabCounter);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
