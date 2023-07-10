import React, { Fragment } from "react";
import Routes from "./routes/Main";
import "./App.scss";
import Navigations from "./pages/components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <Fragment>
      <div className="app-top-nav">
        <img
          style={{ width: "40px", height: "40px", marginRight: "2rem" }}
          src={require("../src/image/icon/bars-solid.svg").default}
        />
      </div>
      <div className="container">
        <Navigations />
        <Routes />
      </div>
      <div className="app-footer">
        &#169; {new Date().getFullYear()} chukwu chijioke peter
      </div>
    </Fragment>
  );
}
