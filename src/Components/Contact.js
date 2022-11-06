import React from "react";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div>
      <div className="home-background"></div>
      <Navbar />
      <div class="card w-50 m-auto mt-5">
        <div className="card-header">
          <h4 class="card-title">Contact ME</h4>
        </div>
        <div class="card-body mb-4 contact-card">
          <h6 class="card-text mt-4 mb-4 contact-card">
            Having trouble with the website? Or you just want to make your own
            website? <br /> contact me on:
          </h6>
          <span> Phone Num: </span>
          <a href="#" className="card-link pt-2 mb-5">
            07814241356
          </a>
          <br />
          <span>E-mail: </span>
          <a href="#" className="card-link pt-2 mb-5">
            Owahbi85@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
