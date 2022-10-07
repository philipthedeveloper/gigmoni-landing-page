import React, { useEffect, useState } from "react";
import Confetti from "../assets/images/Confetti.png";
import { Image } from "react-bootstrap";
import "./PopMessage.css";
import Slide from "react-reveal/Slide";

const ModalPopUp = () => {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  // const click = () => {
  //   setModal(!modal);
  // };

  useEffect(() => {
    setModal(!modal);
  }, []);
  return (
    <Slide right>
      <div className="modal-main-div">
        <div>
          {modal ? (
            <div className="div-row-mod">
              {/* </div> */}

              <div type="button" onClick={handleClose} className="clicker">
                <strong> X </strong>
              </div>
              <div className="wrapper">
                <div className="neon-wrapper">
                  <span className="poppt">New Launching on August, 2022</span>
                  <span className="gradient"></span>
                  <span className="dodge"></span>
                  {/* <span>
                    {" "}
                    <Image src={Confetti} alt="ye" />
                  </span> */}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Slide>
  );
};

export default ModalPopUp;
