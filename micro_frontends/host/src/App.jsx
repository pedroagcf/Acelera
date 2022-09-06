import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { Banner } from "banner/Banner";
import { CardList } from "cardList/CardList";
import "./index.css";

const App = () => {
  return (
    <>
      <Header>MICRO FRONTEND</Header>;
      <Banner />
      <CardList />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
