import React from "react";
import { Sponsor } from "../components/sponsor/Sponsor";
import "./aboutus.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Aboutus = () => {
  return (
    <div>
      <Navbar/>
      <div className="aboutus">
        <div className="aboutus-intro">
          <div className="header">
            <h1> About Us</h1>
          </div>
          <div className="intro">
            <h1>
              The IBEJI FOUNDATION which is an abbreviation of (Ismail Bolaji
              Ebiti Jama'a in Islam) this foundation was formed in memory of
              late Ismail Bolaji Ebiti who died and was buried on the 14th of
              June 1986 with its aim and objective as a charity organization for
              the promotion of the religious education, spiritual, economic and
              social welfare of mankind based on the teachings of Islam.
            </h1>
            <h1>
              It was also established to carry activities towards assisting the
              Muslim youth and other youth empowerment projects, entrepreneurial
              development and charity building effort.
            </h1>
            <h1>
              Ibeji foundation came into existence in the year 2010 registered
              with the cooperate affair commission of Nigeria as a non trading
              corporate entity. it provides access to quality education,
              research, vocational and humanitarian activities.
            </h1>
          </div>
        </div>
        <div className="mission-statement">
          <h1>MISSION STATEMENT</h1>
          <ul>
            <li>
              To assist the farmers by ensuring timely and adequate availability
              of certified/quality seeds of suitable varieties at reasonable
              prices.
            </li>
            <li>
              To identify potential partners and innovative approaches that
              leverage the development of practical and market-driven solutions
              to implement innovative structures that target small-scale
              farmers, youth, women, and micro-enterprises.
            </li>
            <li>
              Creation of a marketplace that will integrate 50 seed traders
              reaching over 5000 smallholder farmers through sales of 50mt seed
              and improved knowledge on seeds and good agronomic practices.
            </li>
            <li>
              Liberalization of the seed ecosystem through automation of NASC
              certification process and development of business of at least 10
              seed companies in the Northeast to enable more efficient seed
              distribution.
            </li>
            <li>
              Increase access to seed and seed information to 5000 smallholder
              farmers through the set-up of seed support via call-center where
              farmers are able to enquire information about seed through
              different communication channels.
            </li>
          </ul>
        </div>
        <div className="Sponsor">
          <Sponsor />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
