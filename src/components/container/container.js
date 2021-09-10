import { useEffect, useState } from "react";
import s from "./container.module.css";
import Card from "../card/card";
import { getCards } from "../../utils/api";

function Container() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCards()
      .then((res) => {
        setData(res.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className={s.container}>
      {data?.map((el) => (
        <Card key={el.id} id={el.id} title={el.attributes.title} rooms={el.attributes.rooms}
          city={el.attributes.address.city} street={el.attributes.address.street} house={el.attributes.address.house} room={el.attributes.address.room} area={el.attributes.area} 
          idAgent={el.relationships.id} name={el.relationships.attributes.first_name} lname={el.relationships.attributes.last_name} mname={el.relationships.attributes.middle_name} />
      ))}
    </ul>
  );
}

export default Container;
