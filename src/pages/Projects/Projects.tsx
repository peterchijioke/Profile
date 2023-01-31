import React from "react";
import Layout from "../components/Layout/Layout";
import Wrapper from "../components/Wrapper/Wrapper";
import "./project.scss";
import Image from "../../image/foodslop1.jpg";
import JcciImage from "../../image/JCCI1.png";
import JcciImage2 from "../../image/JCCI2.png";
import foodslopweb from "../../image/foodslop-web.png";
import oneAuto from "../../image/one1.png";

export default function Projects() {
  return (
    <Layout>
      <Wrapper>
        <h1>PROJECTS</h1>
        <div className="image-contex">
          <img className="feature-image" src={Image} />
          <div className="featured-text">
            <span className="title">Foodslope (Mobile)</span>
            <span>
              foodslope helps you share and discover food recipes. To do that,
              we let our users create and share exciting food recipes along with
              pictures of the amazing meals you prepare. As part of our
              services, we try to ensure that the content you see is relevant
              and interesting to you. You may occasionally see some content that
              is promoted by advertisers on our platforms–whenever we do this,
              the content will be clearly labeled.
            </span>
            <a
              href="https://play.google.com/store/apps/details?id=com.foodstyle"
              className="download-link"
            >
              Download
            </a>
          </div>
        </div>
        {/* foodslop */}
        <div className="image-contex">
          <img className="feature-image" src={JcciImage} />
          <img
            className="feature-image"
            style={{ marginLeft: 5 }}
            src={JcciImage2}
          />
          <div className="featured-text">
            <span className="title">JCCI-GT (Mobile)</span>
            <span>
              JCCI-GT deliver powerful content and resources to help you grow
              and stay connected. With this app you will get to: - Watch or
              listen to messages - Stay up to date with push notifications, -
              Share your favorite messages via Twitter, Facebook, or email - Pay
              you dues, tithes, offering etc and other numerous features coming
              your way.
            </span>
            <a
              href="https://play.google.com/store/apps/details?id=com.aftjchurch"
              className="download-link"
            >
              Download
            </a>
          </div>
        </div>
        {/* foodslop web */}
        <div className="image-contex">
          <img
            className="feature-image"
            style={{ marginLeft: 5 }}
            src={foodslopweb}
          />
          <div className="featured-text">
            <span className="title">Foodslope (Web)</span>
            <span>
              foodslop helps you share and discover food recipes. To do that, we
              let our users create and share exciting food recipes along with
              pictures of the amazing meals you prepare. As part of our
              services, we try to ensure that the content you see is relevant
              and interesting to you. You may occasionally see some content that
              is promoted by advertisers on our platforms–whenever we do this,
              the content will be clearly labeled.
            </span>
            <a
              href="https://staging.foodslope.com/home"
              className="download-link"
            >
              View on web
            </a>
          </div>
        </div>
        {/* one auto mech */}
        <div className="image-contex">
          <img
            className="feature-image"
            style={{ marginLeft: 5 }}
            src={oneAuto}
          />
          <div className="featured-text">
            <span className="title">Quickmechs (Web)</span>
            <span>
              This platform has given you the opportunity to meet with dealers
              of all kinds of cars, trucks, SUVS, etc, and then get the best
              repair services.
            </span>
            <a href="https://staging.quickmechs.com" className="download-link">
              View on web
            </a>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
