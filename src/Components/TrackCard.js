import React from "react";

export default function TrackCard(props) {
  const sendData = (data) => {
    props.track(data);
  };
  const cards = props.data.map((val, i) => {
    return (
      <div className="col" key={i}>
        <div
          className="card h-100 "
          onClick={() => sendData(val)}
          style={{ width: "9.5rem" }}
        >
          <img src={val.cover} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{val.track}</h6>
            <p className="card-text">{val.artist}</p>
          </div>
        </div>
      </div>
    );
  });
  return cards;
}
// style={{ height: "12rem" }}
