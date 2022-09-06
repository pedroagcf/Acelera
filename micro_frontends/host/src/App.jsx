import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import "./index.css";

const App = () => <Header>MICRO FRONTEND</Header>;
ReactDOM.render(<App />, document.getElementById("app"));
