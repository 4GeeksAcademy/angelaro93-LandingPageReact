import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
