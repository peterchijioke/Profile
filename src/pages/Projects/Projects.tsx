import React from "react";
import Layout from "../components/Layout/Layout";
import Wrapper from "../components/Wrapper/Wrapper";
import "./project.scss";
import Image from "../../image/foodslop1.jpg";
import JcciImage from "../../image/JCCI1.png";
import JcciImage2 from "../../image/JCCI2.png";
import foodslopweb from "../../image/foodslop-web.png";
import oneAuto from "../../image/one1.png";
import Airdrop from "../../image/air.png";
import UwlImage from "../../image/uwl.png";
import Uwl_Image from "../../image/uw-.png";

export default function Projects() {
  return (
    <Layout>
      <Wrapper>
        <h1>PROJECTS</h1>
        <div className="image-contex">
          <img className="feature-image" src={UwlImage} />
          <div className="featured-text">
            <span className="title">Ultainfinity Wealth Launchpad (Web)</span>
            <span>
              This is a web application built for the Ultrainfinity Wealth
              Launchpad, which is an ecosystem that allows users to invest in
              various assets and earn passive income.
            </span>
            <a
              href="https://staging-dashboard.ultainfinitywealthlaunchpad.com/"
              className="download-link"
            >
              View on web
            </a>
          </div>
        </div>
        <div className="image-contex">
          <img className="feature-image" src={Uwl_Image} />
          <div className="featured-text">
            <span className="title">ultainfinity Worldwide Partners (Web)</span>
            <span>
              The ultainfinity Worldwide Partners page is designed to Onboard
              influencers and partners
            </span>
            <a
              href="https://staging.ultainfinityworldwidepartners.com/"
              className="download-link"
            >
              View on web
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
        {/* ultainfinity */}
        <div className="image-contex">
          <img
            className="feature-image"
            style={{ marginLeft: 5 }}
            src={Airdrop}
          />
          <div className="featured-text">
            <span className="title">Ultainfinity Airdrop And Bounty (Web)</span>
            <span>
              The Ultainfinity Airdrops and Bounties programs have been tipped
              to be the biggest dual crypto airdrops and bounties programs ever.
              A titanic amount of $300 billion is available for crypto users and
              enthusiasts from all over the world. It is an ideal representation
              of the twin mission of the Ultainfinity Global Group to raise a
              horde of Ultainfinity millionaires and to end the scourge and
              pangs of generational poverty for good.
            </span>
            <a
              href="https://staging.ultainfinityairdropandbounty.com/"
              className="download-link"
            >
              View on web
            </a>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
