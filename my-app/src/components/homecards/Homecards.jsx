import React from "react";
import "./homecards.css";
import { Sponsor } from "../sponsor/Sponsor";
import { Link } from 'react-router-dom';

export const Homecards = () => {
  return (
    <div className="card-container">
      <div className="aboutus-card">
        <div className="aboutus-text">
          <h1>
            The IBEJI FOUNDATION which is an abbreviation of <br></br>(Ismail
            Bolaji Ebiti Jama'a in Islam)
          </h1>
          <p>
            This foundation was formed in memory of late Ismail Bolaji Ebiti who
            died and was buried on the<br></br>
            14th of June 1986 with its aim and objective as a charity
            organization for the promotion of <br></br>
            the religious education, spiritual , economic and social welfare of
            mankind based on the teachings of <br></br>
            Islam.
          </p>
        </div>
        <div className="aboutus-button">
          <button>Ibeji Foundation</button>
          <Link to="/apply"><button>Apply Now</button></Link>
        </div>
      </div>
      <Sponsor/>      
      <div className="work-card">
          <div className="work-card-image">
              <img src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png" alt="" />
              <h1>Charity Work</h1>
              <h2>Read more</h2>
          </div>
          <div className="work-card-image">
              <img src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png" alt="" />
              <h1>Tilling of Mosque</h1>
              <h2>Read more</h2>
          </div>
          <div className="work-card-image">
              <img src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png" alt="" />
              <h1>After Renovation</h1>
              <h2>Read more</h2>
          </div>        
      </div>
    </div>
  );
};
