import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {Helmet} from "react-helmet";
import "./App.css";

import HomePage from "./pages/HomePage";

import ModalPopUp from "./ui/ModalPopUp";

function App() {
  return (
    <div>
      {/* apply styles to body tag globally */}
      <Helmet><style>{'body { background-color: #F3F3F3; }'}</style></Helmet>
       {/* routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
