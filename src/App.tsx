import React, { Fragment } from "react";
import Main from "./routes/Main";
import "./App.scss";
import Nav from "./pages/components/Nav/Nav";

export default function App() {
  return (
    <Fragment>
      <div className="container">
        <Nav />
        <Main />
      </div>
    </Fragment>
  );
}
