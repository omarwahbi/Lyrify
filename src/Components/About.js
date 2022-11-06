import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="about-page">
      <div className="home-background"></div>
      <Navbar />
      <div className="card w-50 m-auto mt-5">
        <div className="card-header">About</div>
        <div className="card-body">
          <h5 className="card-title">What is LYRIFY?</h5>
          <p className="card-text">
            LYRIFY is a simple search engine made just to search for songs
            lyrics in minimal effort
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-title">Who am I?</h5>
          <p className="card-text">
            I'm Omar a web devoloper made this app just for fun and to practise
            coding...
          </p>
          <Link className="btn btn-primary" aria-current="page" href="#" to="/">
            Home
          </Link>
        </div>
      </div>
      {/* <div className="position-absolute">
        <div className="about-app">
          <h1>What is LYRIFY?</h1>
        </div>
        <p>
          LYRIFY is a simple search engine made just to search for songs lyrics
          in minimal effort
        </p>
        <div className="about-me">
          <h1>Who am I?</h1>
          <p>
            I'm Omar a web devoloper made this app just for fun and to practise
            coding...
          </p>
        </div>
      </div> */}
    </div>
  );
}
