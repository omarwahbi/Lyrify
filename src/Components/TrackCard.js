import React from "react";
import Navbar from "./Navbar";

export default function TrackCard(props) {
  console.log(props.data);
  return (
    <div>
      <div className="home-background"></div>
      <Navbar />
      <div className="row row-cols-2 row-cols-md-4 m-auto g-4">
        <div className="col">
          <div className="card h-100">
            <img src={props.data[1].cover} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.data[1].track}</h5>
              <p className="card-text">Album: {props.data[1].album}</p>
              <p className="card-text">artist: {props.data[1].artist}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
