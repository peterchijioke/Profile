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
            Chukwu Chijioke Peter is a dynamic Software Engineer with expertise
            spanning both backend and frontend development. Armed with a
            Bachelor's degree in Computer Science and extensive experience,
            Chijioke has showcased proficiency in technologies such as NodeJS,
            React, React Native, MySQL, and MongoDB. His passion for innovation
            is evident through his contributions to various projects, from
            crafting multi-tenant support systems to developing real estate
            mobile applications. With a track record of delivering exceptional
            software solutions, Chijioke is adept at driving projects forward
            with agility and creativity.
          </span>
          <span className="title-text">The technologies I use include :</span>
          <div className="list-container">
            <ul>
              <li>TypeScript & JavaScript (NestJS, ExpressJS)</li>
              <li>ReactJs & react-native</li>
              <li>Python (Django)</li>
              <li>Google Go</li>
              <li>
                Relational & Graph Databases (MYSQL,Postgress, MongoDB & Neo4j)
              </li>
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
