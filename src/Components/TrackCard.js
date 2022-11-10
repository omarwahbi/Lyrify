import React from "react";
import { Link } from "react-router-dom";

export default function TrackCard(props) {
  const sendData = (data) => {
    props.trackCover(data.cover);
  };
  const cards = props.data.map((val, i) => {
    return (
      <div className="col" key={i}>
        <Link
          to={`../track/artists/${val.id_artist}/albums/${val.id_album}/tracks/${val.id_track}`}
          className="card h-100 "
          onClick={() => sendData(val)}
          style={{ width: "9.5rem" }}
        >
          <img src={val.cover} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{val.track}</h6>
            <p className="card-text">{val.artist}</p>
          </div>
        </Link>
      </div>
    );
  });
  return cards;
}
// style={{ height: "12rem" }}
