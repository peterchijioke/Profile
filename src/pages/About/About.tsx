import React from "react";
import Layout from "../components/Layout/Layout";
import Wrapper from "../components/Wrapper/Wrapper";
import "./about.scss";

export default function About() {
  return (
    <Layout>
      <Wrapper className="text-container">
        <div className="wrapper">
          <span className="title-name">Chukwu Chijioke Peter</span>
          <a
            className="title-email"
            href={"mailto: chukwu.chijioke.peter@gmail.com"}
          >
            chukwu.chijioke.peter@gmail.com
          </a>
          <span className="body-text">
            I am a Computer Scientist, a passionate software engineer with
            demonstrated skills and experience and a researcher. I am currently
            a senior software engineer and project manager at Jatado Tech. My
            research interests span across software engineering.
          </span>
          <span className="title-text">The technologies I use include :</span>
          <div className="list-container">
            <ul>
              <li>TypeScript & JavaScript</li>
              <li>ReactJs & react-native</li>
              <li>Python Flask</li>
              <li>php Laravel </li>
              <li>Jetpack compose & kotlin </li>
              <li>Google Go</li>
              <li>Relational & Graph Databases (MYSQL & Neo4j)</li>
            </ul>
          </div>
          <span className="title-text">The design tool I use includes:</span>
          <div className="list-container">
            <ul>
              <li>Figma (Low fidelity, High fidelity & prototyping)</li>
              <li>Photoshop</li>
              <li>Microsoft Visio (UML, Use Case Modeling & Low fidelity)</li>
              <li>White Board (Brain storming)</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
