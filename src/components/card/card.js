import s from "./card.module.css";
import background from "../../image/background.jpg";
// import cn from "classnames";

function Card() {
  return (
    <div className={s.card} >
      {/* <div className={s.card1}> */}
        <img src={background} alt="front" className={s.img} />
      {/* </div> */}
    </div>
  );
}

export default Card;
