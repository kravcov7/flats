import s from "./card.module.css";
import background from "../../image/background.jpg";
// import cn from "classnames";

function Card() {
  return (
    <li className={s.card}>
      <div className={s.content}>
        <p className={s.flat}>Кваритра № 1</p>
        <p className={s.flat}>Назавание - </p>
        <p className={s.flat}>Количество комнат:</p>
        <p className={s.flat}>Адрес: г. , ул. , д. , кв. </p>
        <p className={s.flat}>Площадь: квм</p>
        <p className={s.flat}>Агент №: </p>
      </div>
      
      
        {/* <input checked={isLiked} type="checkbox" onChange={handleLikeClick} className={s['like-button']} /> */}
        <input type="checkbox" className={s['like-button']} />
      
    </li>
  );
}

export default Card;
