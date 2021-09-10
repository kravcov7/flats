import s from "./card.module.css";

function Card({ id, room, street, house, city, title, rooms, area, idAgent, name, lname, mname }) {
  return (
    <li className={s.card}>
      <div className={s.content}>
        <p className={s.flat}>Кваритра № {id} </p>
        <p className={s.flat}>Назавание - {title} </p>
        <p className={s.flat}>Количество комнат: {rooms} </p>
        <p className={s.flat}>Адрес: г.{city} , ул.{street}, д. {house}, кв.{room}</p>
        <p className={s.flat}>Площадь: {area} квм</p>
        <p className={s.flat}>Агент №: {idAgent}, {lname} {name} {mname} </p>
      </div>
      <input type="checkbox" className={s["like-button"]} />
    </li>
  );
}

export default Card;
