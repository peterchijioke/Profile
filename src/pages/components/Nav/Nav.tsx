import React from "react";
import "./nav.scss";
import Image from "../../../image/profile.jpg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container-nav">
      <div className="avatar-container">
        <img src={Image} alt="" />
      </div>
      <div className="nav-item-container">
        <Link className="nav-item" to={"/"}>
          About Me
        </Link>
        <Link className="nav-item" to={"/education"}>
          Education
        </Link>
        <Link className="nav-item" to={"/projects"}>
          Projects
        </Link>
        <Link className="nav-item" to={""}>
          Research
        </Link>
      </div>
    </div>
  );
}
