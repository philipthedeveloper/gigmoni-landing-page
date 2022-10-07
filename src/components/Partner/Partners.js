import React from "react";
import "./Partners.css";
import flutterwave from "../../assets/images/flutterwave.png";
import kudda from "../../assets/images/kudda.png";
import sendchamp from "../../assets/images/sendchamp.png";
import identitypass from "../../assets/images/identitypass.png";
import fincra from "../../assets/images/fincra.png";

import Image from "react-bootstrap/Image";

const Partners = () => {
  return (
    <div className="partner-main-div">
      <div className="partner-col-div">
        <h4>Our Partners</h4>
      </div>
      <div className="partner-row-div">
        <Image src={kudda} alt="eg" className="img1" />
        <Image src={fincra} alt="eg" className="img2" />
        <Image src={sendchamp} alt="eg" className="img3" />
        <Image src={flutterwave} alt="eg" className="img4" />

        <Image src={identitypass} alt="eg" className="img5" />
      </div>
      <div className="img-identity">
        <Image src={identitypass} alt="eg" className="img6" />
      </div>
    </div>
  );
};

export default Partners;
