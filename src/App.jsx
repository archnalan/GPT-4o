import "./App.css";

import {
  Blog,
  Features,
  Footer,
  Hero,
  Possibility,
  WhatGPT4o,
} from "./Containers";
import { Cta, Brand, Navbar } from "./Components";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Brand />
      <WhatGPT4o />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
