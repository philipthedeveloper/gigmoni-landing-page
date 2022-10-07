import React from "react";
import "./HeaderBody.css";
import Image from "react-bootstrap/Image";
import Confetti from "../../assets/images/Confetti.png";
import Clapping from "../../assets/images/Clapping.png";
import Rectangle from "../../assets/images/Rectangle.png";
import Rectangle4 from "../../assets/images/Rectangle4.png";
import jomboThronePhone from "../../assets/images/jombo-throne-phone.png";
import app from "../../assets/images/app.png";
import google from "../../assets/images/google.png";
import Group from "../../assets/images/Group.png";
import three from "../../assets/images/three.svg";
import partyHorn from "../../assets/icons/party-horn.svg"
import appleLogoIcon from "../../assets/icons/apple-icon.svg"
import googlePlayLogoIcon from "../../assets/icons/google-icon.svg"
import clapIcon from "../../assets/icons/clap-icon-small.svg"

import demoScreenshot from "../../assets/images/demo-screenshot.png"

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Alert, Badge, Button, Row, Col} from 'react-bootstrap';

import Typewriter from 'typewriter-effect';

import NestedModal from "../../WaitListModal/Mui";


const HeaderBody = () => {
  return (
      
      <div className="container marginTop80">

        <div className="row">

          {/* first column */}
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 mt-4">

          {/* announcement */}
          <Badge bg={'light'} className="poppins-regular bd-radius-20 padding-block-0" >
          <Badge bg="dark" className="poppins-regular" pill>New</Badge>
           &nbsp;&nbsp;Launching on August, 2022&nbsp;&nbsp;
           <Image src={partyHorn} />
           
          </Badge>

          {/* type ahead */}
          <>
          {/* show this on large screen */}
          <div className="d-md-block d-none" style={{height:"18rem"}}>
           <span className="poppins-semibold" style={{fontSize:'3.5rem'}}> 
           <Typewriter
  options={{
    strings: ['Send Money from <label class="paypal-gradient">PayPal</label> to <label class="payoneer-gradient">Payoneer</label> Easily.',
    'Send Money from <label class="paypal-gradient">PayPal</label> to <label class="skrill-gradient">Skrill</label> Easily.', 
    'Send Money from <label class="skrill-gradient">Skrill</label> to <label class="paypal-gradient">PayPal</label> Easily.',
     'Send Money from <label class="skrill-gradient">Skrill</label> to <label class="payoneer-gradient">Payoneer</label> Easily.',
     'Send Money from <label class="payoneer-gradient">Payoneer</label> to <label class="paypal-gradient">PayPal</label> Easily.',
     'Send Money from <label class="payoneer-gradient">Payoneer</label> to <label class="skrill-gradient">Skrill</label> Easily.'
   ],
    autoStart: true,
    loop: true,
    cursor:"|"
  }}
/>
{/* 👏🏻 */}
           </span>  
          </div>

          {/* show this on small screen */}
          <div className="d-md-block d-xxl-none d-lg-none" style={{height:"20rem"}}>
           <span className="poppins-regular" style={{fontSize:'3.2rem'}}> 
           <Typewriter
  options={{
    strings: ['Send Money from <label class="paypal-gradient">PayPal</label> to <label class="payoneer-gradient">Payoneer</label> Easily.',
    'Send Money from <label class="paypal-gradient">PayPal</label> to <label class="skrill-gradient">Skrill</label> Easily.', 
    'Send Money from <label class="skrill-gradient">Skrill</label> to <label class="paypal-gradient">PayPal</label> Easily.',
     'Send Money from <label class="skrill-gradient">Skrill</label> to <label class="payoneer-gradient">Payoneer</label> Easily.',
     'Send Money from <label class="payoneer-gradient">Payoneer</label> to <label class="paypal-gradient">PayPal</label> Easily.',
     'Send Money from <label class="payoneer-gradient">Payoneer</label> to <label class="skrill-gradient">Skrill</label> Easily.'
   ],
    autoStart: true,
    loop: true,
    cursor:"|"
  }}
/>
{/* 👏🏻 */}
           </span>  
          </div>
          
          </>

          
          {/* call-to-action-description */}
          <>
          {/* <br></br> */}
          <div className="">
           <span className="poppins-regular font-size-30">
              Pay your freelance employees in bulk across PayPal, Skrill and Payoneer with Gigmonni Disburse
           </span>  
          </div>
          </>

          {/* join waitlist */}
          <>
          <br></br>
          <div>
          <NestedModal />
          {/* <Button variant="primary" className="poppins-regular bg-color-purple bd-radius-10 font-size-20" >Join Waitlist</Button> */}
          </div>
          </>


           {/* download buttons */}
           <>
          <br></br>
          <div>
          <Button variant="outline-dark" className="poppins-regular bd-radius-10 font-size-20" ><Image src={appleLogoIcon} /> &nbsp;Get on <b>iPhone</b></Button>&nbsp;&nbsp;
          <Button variant="outline-dark" className="poppins-regular  bd-radius-10 font-size-20" ><Image src={googlePlayLogoIcon} /> &nbsp; Get on <b>Android</b></Button>
          </div>
          </>

          </div>

          {/* second column */}
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <Image className="width-fit-parent-box d-none d-sm-block d-sm-none d-md-block" src={demoScreenshot} />
          </div>

          </div>

          
      </div>
      
  );
};

export default HeaderBody;
