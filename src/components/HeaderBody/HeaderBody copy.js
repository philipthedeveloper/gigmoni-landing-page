import React from "react";
import "./HeaderBody.css";
import Image from "react-bootstrap/Image";
import Confetti from "../../assets/images/Confetti.png";
import Clapping from "../../assets/images/Clapping.png";
import Rectangle from "../../assets/images/Rectangle.png";
import { Button, Col, Row } from "react-bootstrap";
import Rectangle4 from "../../assets/images/Rectangle4.png";
import jomboThronePhone from "../../assets/images/jombo-throne-phone.png"
import app from "../../assets/images/app.png";
import google from "../../assets/images/google.png";
import Group from "../../assets/images/Group.png";
import three from "../../assets/images/three.svg";
const HeaderBody = () => {
  return (
        <div className="Header-body-row-div">
          <div className="header-phase1">
            <div className="Border-col-1">
              <div className="bod-div">
                <div className="new">New</div>
                <div className="Launch">Launching on August, 2022</div>
                <div>
                  <Image src={Confetti} alt="ye" className="Confetti-image" />{" "}
                </div>
              </div>
            </div>
            {/* <div> */}
            <div className="Col-phase-main-div">
              <div className="Col-phase-div">
                <span> Send Money From</span> <span className="pay"></span>
                <span className="pal"></span>
                <span className="to">to</span>{" "}
                <span className="payoneer"></span> Easily.
                <span>
                  <Image src={Clapping} alt="get" className="clapping" />{" "}
                </span>
              </div>

              {/* for media query */}
              <div className="Col-phase-div2">
                <span> Send Money From</span>{" "}
                <span className="pay1">PayPal</span>
                <span className="pal2"></span>
                <span className="to1">to</span>{" "}
                <span className="payoneer2">Payoneer</span> Easily.
                <span>
                  <Image src={Clapping} alt="get" className="clapping2" />{" "}
                </span>
              </div>
              {/* to stop here */}
              <div className="div-h5">
                <h5>
                  Pay your freelance employees in bulk across PayPal, Skrill and
                  Payoneer with Gigmoni Disburse
                </h5>
              </div>
              {/* not display desktop view */}
              <div className="dica-div">
                <Row className="justify-content-md-center">
                  <Col xs={12} sm={4} md={4}>
                    <Image
                      src={Group}
                      alt="ted"
                      className="Header-right-image4"
                    />
                  </Col>
                </Row>
              </div>

              {/* not display desktop view */}
              <div>
                <button className="btn-but">Join Waitlist</button>
              </div>
              <div className="image-row">
                <Image src={app} alt="gd" className="image-row-image1" />
                <Image src={google} alt="gd" className="image-row-image2" />
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* <div>
          <Image src={three} className="img-d-2" />
        </div> */}
          <div className="header-phase2">
            {/* <Image src={jomboThronePhone} alt='gigmoni demo screen' style={{width:'50%'}}/> */}
            <Image src={Rectangle4} alt="ted" className="Header-right-image2" /> 
            <Image src={Group} alt="ted" className="Header-right-image3" /> 
             <Image src={Rectangle} alt="ted" className="Header-right-image1" />
          </div>
        </div>
      
  );
};

export default HeaderBody;
