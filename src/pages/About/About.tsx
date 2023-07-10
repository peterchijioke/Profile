import React from "react";
import Layout from "../components/Layout/Layout";
import Wrapper from "../components/Wrapper/Wrapper";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import githusvg from "../../image/github.svg";
import linkedin from "../../image/linkedin.svg";

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
          <div className="social">
            <a href="https://github.com/peterchijioke" className="github">
              <div className="round-github">
                <img src={githusvg} style={{ width: 30, height: 30 }} />
              </div>
            </a>
            {/* github */}
            <a
              href="https://www.linkedin.com/in/chijioke-peter/"
              className="github"
            >
              <div style={{ marginLeft: 20 }} className="round-github">
                <img src={linkedin} style={{ width: 30, height: 30 }} />
              </div>
            </a>
            {/* linkedin */}
          </div>
          <span className="body-text">
            Experienced Senior Software Engineer with a passion for creating
            innovative solutions in the field of computer science. Proficient in
            a wide range of technologies and languages, including TypeScript,
            JavaScript, React Native, PHP Laravel, Django, NodeJS, NestJS, Rest
            API, Graph Database, MySQL, Docker, AWS, ReactJS, Golang Gin, and
            Neo4j Graph DB. Skilled in utilizing design tools such as Figma for
            low and high-fidelity prototyping, Photoshop for graphic design, and
            Microsoft Visio for UML and low-fidelity designs. Committed to
            delivering high-quality software solutions and constantly expanding
            knowledge in the ever-evolving tech landscape.
          </span>
          <span className="title-text">The technologies I use include :</span>
          <div className="list-container">
            <ul>
              <li>TypeScript & JavaScript (AndonisJS)</li>
              <li>ReactJs & react-native</li>
              <li>Python (Flask)</li>
              <li>php (Laravel) </li>
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
