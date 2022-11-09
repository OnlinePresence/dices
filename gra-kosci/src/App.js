import React, { useState, useEffect } from "react";
import "./App.css";
import DiceList from "./Components/DicesList";

const randomNumber = () => {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};

let dice_parameters = [
  {
    key: 0,
    value: randomNumber(),
    active: false,
  },
  {
    key: 1,
    value: randomNumber(),
    active: false,
  },
  {
    key: 2,
    value: randomNumber(),
    active: false,
  },
  {
    key: 3,
    value: randomNumber(),
    active: false,
  },
  {
    key: 4,
    value: randomNumber(),
    active: false,
  },
  {
    key: 5,
    value: randomNumber(),
    active: false,
  },
  {
    key: 6,
    value: randomNumber(),
    active: false,
  },
  {
    key: 7,
    value: randomNumber(),
    active: false,
  },
  {
    key: 8,
    value: randomNumber(),
    active: false,
  },
];

const App = () => {
  const [dices, setDices] = useState(dice_parameters);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (
      dices.every((dice) => dice.active === true) &&
      dices.every((dice) => dice.value === dices[0].value)
    ) {
      setGameWon(true);
      console.log("You win!");
    }
  }, [dices]);

  const activeHandler = (key) => {
    console.log("Kość o ID ", key);
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.key === key ? { ...dice, active: !dice.active } : dice;
      })
    );
  };

  const rollHandler = () => {
    if (gameWon === false) {
      setDices((oldDices) =>
        oldDices.map((dice) => {
          return !dice.active ? { ...dice, value: randomNumber() } : dice;
        })
      );
    } else {
      setGameWon(false);
      setDices((oldDices) =>
        oldDices.map((dice) => {
          return { ...dice, value: randomNumber(), active: false };
        })
      );
    }
  };

  return (
    <div className="App">
      <DiceList items={dices} activeHandler={activeHandler} />
      <button className="roll-button" onClick={rollHandler}>
        {gameWon ? "Nowa gra" : "Losuj"}
      </button>
    </div>
  );
};
export default App;
