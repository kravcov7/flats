// import { useEffect, useState, useRef } from "react";
import s from "./container.module.css";
// import moveCards from "../../utils/utils";
import Card from "../card/card";
// import { arrayCards } from "../../utils/data";

function Container() {
  // const [cards, setCards] = useState(() => moveCards(arrayCards.concat(arrayCards)));

  return (
    <ul className={s.container}>
      <Card />
      <Card />
      <Card />
    </ul>
  );
}

export default Container;
