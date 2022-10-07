import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Disburse.css";
import salary from "../../assets/images/salary.png";
import world from "../../assets/images/world.png";

const Disburse = () => {
  return (
    <div className="Disburse-main-div">
      <div className="div-disburse-div">
        <br />
        <div className="div-h6">
          {" "}
          <h6>
            Disburse payment to your freelencers around the world with Gigmoni
            regardless of recepient's choice
          </h6>
          <button className="diva-btn-black">Get Gigmoni</button>
        </div>
        <div className="Disburse-row-div">
          <div>
            <Image src={salary} alt="hs" className="disburse-img1" />
          </div>
          <div>
            <Image src={world} alt="hf" className="disburse-img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disburse;
