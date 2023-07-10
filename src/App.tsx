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
      <div className="app-footer">
        &#169; {new Date().getFullYear()} chukwu chijioke peter
      </div>
    </Fragment>
  );
}
