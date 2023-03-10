import React from "react";
import { Link } from "react-router-dom";
import Tbar from "./components/topbar.js"

/**
 * Contains information describing KanScratch on a page called "About".
 * @function
 */
const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Tbar/>
        <h1 className="title">About KanScratch</h1>
      </header>
    </div>
  );
};
  
export default About;