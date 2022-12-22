import React from "react";
import "./nav.scss";
import Image from "../../../image/profile.jpg";

export default function Nav() {
  return (
    <div className="container-nav">
      <div className="avatar-container">
        <img src={Image} alt="profile-image" />
      </div>
      <div className="nav-item-container">
        <div className="nav-item">About Me</div>
        <div className="nav-item">About Me</div>
      </div>
    </div>
  );
}
