import React from "react";
import './App.css'

import { CTA, Brand, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Possibility,
  Header,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
