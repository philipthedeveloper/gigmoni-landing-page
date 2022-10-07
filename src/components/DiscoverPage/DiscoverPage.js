import React from "react";
import { Button, Image } from "react-bootstrap";
import Groups from "../../assets/images/Groups.png";
import Group from "../../assets/images/Group.png";
import phone from "../../assets/images/phone.png";
import card from "../../assets/images/card.png";
import invioce from "../../assets/images/invioce.png";
import Slide from "react-reveal/Slide";
import Slider from "react-slick";
import "./Discover.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NestedModal from "../../WaitListModal/Mui";

const DiscoverPage = () => {
  const settings = {
    dots: true,

    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <div className="Discover-main-div">
      <div>
        <h5 className="Dis-h5">Discover what's so amazing about Gigmoni</h5>
      </div>{" "}
      {/* <Slider {...settings} className="slider-main"> */}
      <Carousel>
        {/* <div> */}
        <div className="Discover-page-row-div">
          <div className="Discover-phase1">
            <Slide left>
              <Image src={Groups} alt="db" className="dis-image" />
            </Slide>
          </div>
          <div className="Discover-div-flex2">
            <div>
              <h4>All Transactions. All in one platform</h4>
            </div>
            <div>
              <h6 className="dis-h6" style={{ fontSize: "20px" }}>
                send and recieve money across PayPal, Skrill and Payoneer, Using
                Gigmoni
              </h6>
            </div>
            <div>
              <NestedModal />
            </div>
          </div>
        </div>

        {/* create invioce */}
        <div
          className="Discover-page-row-div2"
          style={{ backgroungColor: "#D9D9D9" }}
        >
          <div className="Discover-phase3" style={{ margin: "50px" }}>
            <Slide right>
              <Image
                src={card}
                alt="db"
                style={{ width: "auto", height: "30vh" }}
              />
            </Slide>
          </div>
          <div className="Discover-phase2-div2">
            <div>
              <h4>Link Card</h4>
            </div>
            <div>
              <h6 className="dis-h6" style={{ fontSize: "20px" }}>
                Link your cards and enjoy all our services
              </h6>
            </div>
            <div>
              <NestedModal />
              {/* <button className="btn-block-button">Join Waitlist</button> */}
            </div>
          </div>
        </div>
        {/* create invoice */}
        {/* second paragraph div */}
        <div
          className="Discover-page-row-div2"
          style={{ backgroungColor: "#D9D9D9" }}
        >
          <div className="Discover-phase3">
            <Slide right>
              <Image
                src={Group}
                alt="db"
                className="dis-image2"
                style={{ width: "auto", height: "60vh" }}
              />
            </Slide>
          </div>
          <div className="Discover-phase2-div2">
            <div>
              <h4>Pay remote workers with ease</h4>
            </div>
            <div>
              <h6 className="dis-h6" style={{ fontSize: "20px" }}>
                we assist businessess send and receive money across PayPal,
                Skrill and Payoneer, even if the employer's choice of payment
                system is different from employees
              </h6>
            </div>
            <div>
              <NestedModal />
              {/* <button className="btn-block-button">Join Waitlist</button> */}
            </div>
          </div>
        </div>
        {/* second paragraph div */}
        {/* second paragraph div */}
        <div
          className="Discover-page-row-div2"
          style={{ backgroungColor: "#D9D9D9" }}
        >
          <div className="Discover-phase3">
            <Slide right>
              <Image
                src={invioce}
                alt="db"
                className="dis-image2"
                style={{ width: "auto", height: "60vh" }}
              />
            </Slide>
          </div>
          <div className="Discover-phase2-div2">
            <div>
              <h4>Create invioce</h4>
            </div>
            <div>
              <h6 className="dis-h6" style={{ fontSize: "20px" }}>
                Create payment invioce for any platform you transit with.
              </h6>
            </div>
            <div>
              <NestedModal />
              {/* <button className="btn-block-button">Join Waitlist</button> */}
            </div>
          </div>
        </div>
        {/* second paragraph div */}
        {/* third paragraph div */}
        <div
          className="Discover-page-row-div3"
          style={{ backgroungColor: "#D9D9D9" }}
        >
          <div className="Discover-phase-div3">
            <Slide left>
              <Image src={phone} alt="db" className="dis-image3" />
            </Slide>
          </div>
          <div className="Discover-phase2-div3">
            <div>
              <h4>Attach foreign Accounts</h4>
            </div>
            <div>
              <h6 className="dis-h6" style={{ fontSize: "20px" }}>
                To enable seamless wallet transfer, you can easily integrate
                your existing foreign bank accounts or credit cards
              </h6>
            </div>
            <div>
              <NestedModal />
              {/* <button className="btn-block-button">Join Waitlist</button> */}
            </div>
          </div>
        </div>
        {/* third paragraph div */}
        {/* </div> */}
      </Carousel>
      {/* </Slider> */}
    </div>
  );
};

export default DiscoverPage;
