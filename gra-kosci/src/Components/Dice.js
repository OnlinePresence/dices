import React from "react";
import "./Dice.css";

const Dice = (props) => {
  return (
    <button
      className="dice"
      style={{ backgroundColor: props.active ? "#7cc4b8" : "#c0c0c0" }}
      onClick={props.diceKeyHandler}
    >
      {props.value}
    </button>
  );
};
export default Dice;
