import React from "react";
import Layout from "../components/Layout/Layout";
import "./about.scss";

export default function About() {
  return (
    <Layout>
      <div className="text-container">
        <div className="wrapper">
          <span className="title-name">Chukwu Chijioke Peter</span>
          <a
            className="title-email"
            href={"mailto: chukwu.chijioke.peter@gmail.com"}
          >
            chukwu.chijioke.peter@gmail.com
          </a>
          <span className="body-text">
            I am a Computer Scientist, Software engineer and a post graduate
            student. I am currently a senior software engineer and project
            manager at Jatado Tech. My research interests have is software
            engineering.
          </span>
        </div>
      </div>
    </Layout>
  );
}
