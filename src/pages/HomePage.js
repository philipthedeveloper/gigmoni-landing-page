import React, { useEffect, useState } from "react";

import HeaderBody from "../components/HeaderBody/HeaderBody";
import Partners from "../components//Partner/Partners";

import Disburse from "../components/Disburse/Disburse";
import FAQ from "../components/FAQ/FAQ";

import DiscoverPage from "../components/DiscoverPage/DiscoverPage";

import Footers from "../components/Footer/Footers";

const HomePage = () => {
  return (
    <div>
      
      <HeaderBody />

      <br></br>
      
      <Partners />

      <DiscoverPage />

      <Disburse />
      <FAQ />

      <Footers />
    </div>
  );
};

export default HomePage;
