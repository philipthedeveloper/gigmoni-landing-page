import React from "react";
import "./Footer.css";
import app from "../../assets/images/app.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import githab from "../../assets/images/githab.png";
import google from "../../assets/images/google.png";
import { Image } from "react-bootstrap";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { RiGithubFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./Footer.css";
const Footers = () => {
  return (
         
          <footer
            className="text-center text-lg-start text-black"
            style={{
              backgroundColor: " #D9D9D9",
              border: "1px solid",
              // borderColor:
              //   "linear-gradient(#5D53D2,#9311F9,#3E39BB, #5D53D2,#827ADB,#5D53D2,#5D53D2,#8680C6,#5E53D3)",
              borderColor: "#5D53D2",
              fontFamily: "poppins-regular",
            }}
            
          >
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
              
              <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                  {/* <!-- Grid column --> */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                    <p>Create PayPal Invioce</p>
                    <p>Interplatform Transfer</p>
                    <p>Disburse</p>
                    <p>Coming Soon</p>
                    <p>Virtual Card</p>
                    <p>Foreign Bank Accounts</p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{fontFamily:'poppins-regular'}}>
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Partners</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                    <p>Identity Pass</p>
                    <p>Sendchamp</p>
                    <p>Fincra</p>
                    <p>Flutterwave</p>
                    <p>KlaDot</p>
                    <p>Refer A Friend</p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">About</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                    <p>About Gigmoni</p>
                    <p>Investors</p>
                    <p>Fees</p>
                    <p>Careers</p>
                    <p>Blog</p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Help</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                    <p>Customer Care</p>
                    <p>Contact Us</p>
                    <p>Security Center</p>
                    <p>Customer assistance,</p>
                    <p>Compliants and</p>
                    <p>Disclosure Policies</p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Discover Our App</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Image src={app} alt="gd" className="img-apple" />
                      <Image
                        src={google}
                        alt="gd"
                        style={{ width: "auto", height: "6vh" }}
                      />
                    </p>
                    <p>
                      <h6 className="text-uppercase fw-bold">Address</h6>
                    </p>
                    <p>4, Soretire street, Ogba, Lagos, Nigeria.</p>
                    <p>
                      <h6 className="text-uppercase fw-bold">Follow Us</h6>
                    </p>
                    <p>
                      <ImFacebook2
                        style={{
                          margin: "5px",
                        }}
                      />
                      <ImLinkedin
                        style={{
                          margin: "5px",
                        }}
                      />
                      <AiFillTwitterSquare
                        style={{
                          margin: "5px",
                        }}
                      />
                      <RiGithubFill />
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
              </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div
              className="text-center p-3"
              style={{
                backgroundColor: "#D9D9D9",
                fontFamily: "poppins-regular",
              }}
            >
              Copyright © 2022:
              <span style={{ color: "black", fontWeight: "500" }}>
                <span style={{ color: "#5D53D2" }}>G</span>igmoni
                <span
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  X
                </span>
                Continus,Inc.,
              </span>
              All right reserved
            </div>
            {/* <!-- Copyright --> */}
          </footer>
         
  );
};

export default Footers;
