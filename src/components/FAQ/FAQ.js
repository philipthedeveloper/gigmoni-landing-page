// import React, { useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import "./Faq.css";

// const FAQ = () => {
//   const [more, setMore] = useState(false);

//   const click = () => {
//     setMore(!more);
//   };
//   return (
//     <div className="faq-main-div">
//       <div className="faq-mg-div">
//         <h5 className="faq-h5">FREQUENTLY ASKED QUESTIONS</h5>

//         <div className="rows-faq-div">
//           <div className="faq-col-1">
//             <div className="faq-border">+ What is Gigmoni?</div>
//             <div className="faq-border">
//               + Can I send money from my Gigmoni account to another Gigmon
//               account?
//             </div>
//             <div className="faq-border">+ Who built Gigmoni?</div>
//             <div className="faq-border">
//               + What currency does Gigmoni support?
//             </div>
//             <div className="faq-border">
//               <div>
//                 - Does Gigmoni allow me to send from my PayPal to Payoneer?
//               </div>
//               <div>
//                 yes, Gigmoni allows users to send and receieve payment across
//                 various supposedly incompatible platforms. This MVP allows users
//                 to send and receive money in..
//                 <div type="button" onClick={click} className="seemore">
//                   see more...
//                 </div>
//                 <div>
//                   {more ? (
//                     <div>
//                       <div>New Launching on August, 2022</div>
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="faq-col-2">
//             <div className="faq-border">
//               <div>
//                 {" "}
//                 - Does Gigmoni allow me to send from my PayPal to Skrill?
//               </div>
//               <div>
//                 yes, Gigmoni allows users to send and receieve payment across
//                 various supposedly incompatible platforms. This MVP allows users
//                 to send and receive money in..
//                 <div type="button" onClick={click} className="seemore">
//                   see more...
//                 </div>
//                 <div>
//                   {more ? (
//                     <div>
//                       <div>New Launching on August, 2022</div>
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="faq-border">
//               <div>
//                 {" "}
//                 - Does Gigmoni allow me to send from my Payoneer to Skrill?
//               </div>
//               <div>
//                 yes, Gigmoni allows users to send and receieve payment across
//                 various supposedly incompatible platforms. This MVP allows users
//                 to send and receive money in..
//                 <div type="button" onClick={click} className="seemore">
//                   see more...
//                 </div>
//                 <div>
//                   {more ? (
//                     <div>
//                       <div>New Launching on August, 2022</div>
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="faq-border">
//               + Does Gigmoni allow me to send from my Skrill to Payoneer?
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Faq.css";

const FAQ = () => {
  const [more, setMore] = useState(false);
  const [why, setWhy] = useState(false);
  const [whys, setWhys] = useState(false);
  const [wh, setWh] = useState(false);
  const [open, setOpen] = useState(false);
  const [pen, setPen] = useState(false);
  const [note, setNote] = useState(false);
  const [whin, setWhin] = useState(false);

  const clicks = () => {
    setMore(!more);
  };
  const click = () => {
    setWhy(!why);
  };
  const clicker = () => {
    setWhys(!whys);
  };
  const Press = () => {
    setWh(!wh);
  };
  const Pressed = () => {
    setOpen(!open);
  };
  const clert = () => {
    setPen(!pen);
  };
  const cloth = () => {
    setNote(!note);
  };
  const clicth = () => {
    setWhin(!whin);
  };
  return (
    <div className="Faq-main-div">
      <div className="faq-mg">
        <div className="faq-h5">FREQUENTLY ASKED QUESTIONS</div>
        <div className="faq-flex-div">
          <div className="faq-col-1">
            <div className="cont-flex-faq-div">
              <div>+</div>
              <div style={{ cursor: "pointer" }} onClick={clicks}>
                {" "}
                What is Gigmoni?
                <div>
                  {more ? (
                    <div className="cont-flex-faq-div">
                      <div style={{ display: "block" }}>
                        <div>
                          Gigmoni is a payment solution that allows users to
                          send and receive money across various incompatible
                          platforms
                        </div>
                        <div>
                          This MVP allows users to send and receive money in
                          this pattern:
                        </div>
                        <div>PayPal to Payoneer</div>
                        <div>Payoneer to PayPal</div>
                        <div>PayPal to Skrill</div>
                        <div>Skrill to PayPal</div>
                        <div>Payoneer to Skrill</div>
                        <div>Skrill to Payoneer</div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="cont-flex-faq-div">
              <span>+</span>
              <div style={{ cursor: "pointer" }} onClick={click}>
                {" "}
                Can I send money from my Gigmoni account to another Gigmoni
                account?
                <div>
                  {why ? (
                    <div className="cont-flex-faq-div">
                      <div>
                        {" "}
                        yes, Gigmoni allows users to send and receieve payment
                        across various supposedly incompatible platforms. This
                        MVP allows users to send and receive money in..
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="cont-flex-faq-div">
              <div>+</div>
              <div style={{ cursor: "pointer" }} onClick={clicker}>
                {" "}
                Who built Gigmoni?
                <div>
                  {whys ? (
                    <div>
                      <div>
                        Gigmoni was built by the collaboration of professional
                        developers
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="cont-flex-faq-div">
              <span>+</span>
              <div style={{ cursor: "pointer" }} onClick={Press}>
                {" "}
                What currency does Gigmoni support?
                <div>
                  {wh ? (
                    <div>
                      <div>New Launching on August, 2022</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="cont-flex-faq-div">
              <span>-</span>
              <div style={{ cursor: "pointer" }} onClick={Pressed}>
                {" "}
                Does Gigmoni allow me to send from my PayPal to Payoneer?
                <div>
                  {open ? (
                    <div>
                      <div>
                        {" "}
                        yes, Gigmoni allows users to send and receieve payment
                        across various supposedly incompatible platforms. This
                        MVP allows users to send and receive money in..
                      </div>
                      <Link style={{ textDecoration: "none" }} to="/FaqDetails">
                        <div className="seemore">Read more...</div>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="faq-col-2">
            <div className="cont-flex-faq-div2">
              <span>-</span>
              <div style={{ cursor: "pointer" }} onClick={clert}>
                {" "}
                Does Gigmoni allow me to send from my PayPal to Skrill?
                <div>
                  {pen ? (
                    <div>
                      <div>
                        {" "}
                        yes, Gigmoni allows users to send and receieve payment
                        across various supposedly incompatible platforms. This
                        MVP allows users to send and receive money in..
                      </div>
                      <Link style={{ textDecoration: "none" }} to="/FaqDetails">
                        <div className="seemore">Read more...</div>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="cont-flex-faq-div2">
              <span>-</span>
              <div style={{ cursor: "pointer" }} onClick={cloth}>
                {" "}
                Does Gigmoni allow me to send from my Payoneer to Skrill?
                <div>
                  {note ? (
                    <div>
                      <div>
                        {" "}
                        yes, Gigmoni allows users to send and receieve payment
                        across various supposedly incompatible platforms. This
                        MVP allows users to send and receive money in..
                      </div>
                      <Link style={{ textDecoration: "none" }} to="/FaqDetails">
                        <div className="seemore">Read more...</div>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="cont-flex-faq-div2">
              <div>+</div>
              <div style={{ cursor: "pointer" }} onClick={clicth}>
                {" "}
                Does Gigmoni allow me to send from my Skrill to Payoneer?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
