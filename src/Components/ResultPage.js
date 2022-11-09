import React from "react";
import { useNavigate } from "react-router-dom";
import TrackCard from "./TrackCard";

export default function ResultPage(props) {
  const navigate = useNavigate();
  const trackData = (data) => {
    // navigate("/track");
    fetch(
      `https://api.happi.dev/v1/music/artists/${data.id_artist}/albums/${data.id_album}/tracks/${data.id_track}`,
      {
        headers: {
          "x-happi-key":
            "b74680hnKpCjizznI3vzGzQyUD4gS8clkWjTGgQVGUp8daEi4uxFlKzs",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        props.fetchTrackData(response.result, data.cover);

        navigate("/track");
      })

      .catch((err) => {
        console.log(err);
      });
  };
  function noResult() {
    return (
      <div>
        <h1 className="no-result">Nothing can be found</h1>
      </div>
    );
  }
  return props.data.length <= 0 ? (
    noResult()
  ) : (
    <div>
      <div className="row row-cols-2 row-cols-md-6 m-auto g-4 container">
        <TrackCard data={props.data} track={trackData} />
      </div>
    </div>
  );
}
