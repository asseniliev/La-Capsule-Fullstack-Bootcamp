import styles from "../styles/Home.module.css";
import { useState } from "react";

function Home() {
  let [counter, setCounter] = useState(0);

  const decrementCounter = function () {
    if (counter > 0) counter -= 1;
    setCounter(counter);
    console.log(counter);
  };

  const incrementCounter = function () {
    counter += 1;
    setCounter(counter);
    console.log(counter);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}>
        <button
          onClick={() => decrementCounter()}
          className={styles.decrementBtn}
          id="decrementBtn"
        >
          -
        </button>
        <span className={styles.counter} id="counter">
          {counter}
        </span>
        <button
          onClick={() => incrementCounter()}
          className={styles.incrementBtn}
          id="incrementBtn"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
