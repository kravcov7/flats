// import "./App.css";

import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Container from "./components/container/container";
import { getCards } from "./components/utils/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCards()
      .then(res => {
        setData(res.response);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(data[0]?.id);

  return (
    <>
      <Header />
      <Container data={data} />
    </>
  );
}

export default App;
