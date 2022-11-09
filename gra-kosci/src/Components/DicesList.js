import React from "react";
import Dice from "./Dice";
import "./DiceList.css";

const DiceList = (props) => {
  return (
    <div className="dice-list">
      {props.items.map((item) => (
        <Dice
          key={item.key}
          value={item.value}
          active={item.active}
          diceKeyHandler={() => props.activeHandler(item.key)}
        />
      ))}
    </div>
  );
};
export default DiceList;
