import React from "react";
import { Carousel } from "../components/carousel/Carousel";
import './project.css'
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Project = () => {
  return (
    <div className="Project">
      <Navbar/>
      <div className="miniproject">
        <Carousel />
        <div className="miniproject-text">
          <h1>
          January to December 2012 PROJECTS     
          </h1>
          <h3>
          Many jobs were carried out from January to Decemberr 2012. We have touched various aspect of <br></br>humanitarian work which is outline and mention in details below
          </h3>
          <h3 className="bold">
          Ajumoni central mosque Oworoshoki
          </h3>
        </div>        
      </div>
      <div className="miniproject">
        <Carousel />
        <div className="miniproject-text">
          <h1>
          January to December 2012 PROJECTS     
          </h1>
          <h3>
          Many jobs were carried out from January to Decemberr 2012. We have touched various aspect of <br></br>humanitarian work which is outline and mention in details below
          </h3>
          <h3 className="bold">
          Ajumoni central mosque Oworoshoki
          </h3>
        </div>        
      </div>
      <div className="miniproject">
        <Carousel />
        <div className="miniproject-text">
          <h1>
          January to December 2012 PROJECTS     
          </h1>
          <h3>
          Many jobs were carried out from January to Decemberr 2012. We have touched various aspect of <br></br>humanitarian work which is outline and mention in details below
          </h3>
          <h3 className="bold">
          Ajumoni central mosque Oworoshoki
          </h3>
        </div>        
      </div>
      <div className="miniproject">
        <Carousel />
        <div className="miniproject-text">
          <h1>
          January to December 2012 PROJECTS     
          </h1>
          <h3>
          Many jobs were carried out from January to Decemberr 2012. We have touched various aspect of <br></br>humanitarian work which is outline and mention in details below
          </h3>
          <h3 className="bold">
          Ajumoni central mosque Oworoshoki
          </h3>
        </div>        
      </div>
      <Footer/>
    </div>
  );
};
