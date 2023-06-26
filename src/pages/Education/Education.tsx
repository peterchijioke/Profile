import React from "react";
import Layout from "../components/Layout/Layout";
import Wrapper from "../components/Wrapper/Wrapper";
import "./education.scss";

export default function Education() {
  return (
    <Layout>
      <Wrapper className="education-container">
        <div className="wrapper-school">
          <div className="title-wrap-one">
            <h3 className="school-title">
              Federal University Of technology, Owerri
            </h3>
            <span className="school-subtitle">MSC in computer science</span>
          </div>
          <div className="title-wrap-two">
            <h5>Sept 2021 - current</h5>
          </div>
        </div>
        <div className="thesis-wrapper">
          <span>Thesis: </span>
          <a href="#">
            Interfussion of audit trail for research and planning in information
            system design.
          </a>
        </div>
        <div className="thesis-wrapper">
          <span>Advisor: </span>
          <a href="mailto:cnnodimnjoku@gmail.com">
            Dr. C.N. Njoku & Dr. C.D Ayiam
          </a>
        </div>
        {/* Msc */}
        <div style={{ marginTop: 30 }} className="wrapper-school">
          <div className="title-wrap-one">
            <h3 className="school-title">
              Chukwuemeka Odumegwu Ojukwu University, Uli
            </h3>
            <span className="school-subtitle">BSc in computer science</span>
          </div>
          <div className="title-wrap-two">
            <h5>Sept 2016 - Sep 2019</h5>
          </div>
        </div>
        <div className="thesis-wrapper">
          <span>Thesis: </span>
          <a href="#">
            Research & Implimentation of an agricultural Management information
            system
          </a>
        </div>
        <div className="thesis-wrapper">
          <span>Advisor: </span>
          <a href="mailto:nc.ezenwegbu@coou.edu.ng">
            Mr. Ezenwegbu Chimaobi Nnamdi
          </a>
        </div>
        {/* Bsc */}
        <div style={{ marginTop: 30 }} className="wrapper-school">
          <div className="title-wrap-one">
            <h3 className="school-title">Covenant Polytechnic, Aba</h3>
            <span className="school-subtitle">OND in computer engineering</span>
          </div>
          <div className="title-wrap-two">
            <h5>Sept 2013 - Aug 2015</h5>
          </div>
        </div>
        <div className="thesis-wrapper">
          <span>Project: </span>
          <a href="#">Design & Implimentaion of automatic Changeover switch</a>
        </div>
        <div className="thesis-wrapper">
          <span>Advisor: </span>
          <a href="mailto:">Mr. Charles Nwoke</a>
        </div>
        {/* OND */}
      </Wrapper>
    </Layout>
  );
}
