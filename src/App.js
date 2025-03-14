import React from "react";
import ProductList from "./components/ProductList";
import useTypewriter from "./components/Typewriter";
import "./App.css";

const App = () => {
  const typewriterText = useTypewriter(
    "The AI model behind these recommended ads creates a dynamic user profile for story-based targeting that is continuously updated",
    50, 10000
  );
  return (
    <div className="container">
      <div className="main-content">
        <h1>2025 Battle of the Brains Champions</h1>
        <h2> Alabama State University!!! </h2>
        <p>Innovation | Strategy | Excellence</p>
        {/* <p>The AI model behind these recommended ads creates a dynamic user profile for story based targeting that is continuously updated </p> */}
        <p className="typewriter">{typewriterText}</p>
      </div>
      <div className="ad-section">
        <h2>Sponsored Ads</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default App;
