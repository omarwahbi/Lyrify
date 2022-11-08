import React, { useState } from "react";

export default function SongLyrics(props) {
  const [lyrics, setLyrics] = useState();
  console.log(props.trackData.api_lyrics);
  fetch(props.trackData.api_lyrics, {
    headers: {
      "x-happi-key": "b74680hnKpCjizznI3vzGzQyUD4gS8clkWjTGgQVGUp8daEi4uxFlKzs",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.result.lyrics);
      setLyrics(response.result.lyrics);
    })

    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <div className="card mb-3  song-info" style={{ maxWidth: "30rem" }}>
        <div className="row g-0 ">
          <div className="col-md-4 col-sm-2 col-xs-1">
            <img
              src={props.cover}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 col-sm-4 col-xs-2">
            <div className="card-body">
              <h5 className="card-title">{props.trackData.track}</h5>
              <p className="card-text">{props.trackData.album}</p>
              <p className="card-text">{props.trackData.artist}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lyrics-section">{lyrics}</div>
    </div>
  );
}
