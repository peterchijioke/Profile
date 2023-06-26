import React, { Fragment } from "react";
import Routes from "./routes/Main";
import "./App.scss";
import Navigations from "./pages/components/Nav/Nav";

export default function App() {
  return (
    <Fragment>
      <div className="container">
        <Navigations />
        <Routes />
      </div>
    </Fragment>
  );
}
