import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loading from "./Loading";

export default function SongLyrics(props) {
  const [lyrics, setLyrics] = useState();
  const [trackData, setTrackData] = useState();
  let { id_artist, id_album, id_track } = useParams();

  useEffect(() => {
    fetch(
      `https://api.happi.dev/v1/music/artists/${id_artist}/albums/${id_album}/tracks/${id_track}`,
      {
        headers: {
          "x-happi-key":
            "b74680hnKpCjizznI3vzGzQyUD4gS8clkWjTGgQVGUp8daEi4uxFlKzs",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setTrackData(response.result);
        fetch(response.result.api_lyrics, {
          headers: {
            "x-happi-key":
              "b74680hnKpCjizznI3vzGzQyUD4gS8clkWjTGgQVGUp8daEi4uxFlKzs",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            setLyrics(response.result.lyrics);
          })

          .catch((err) => {
            console.log(err);
          });
      })

      .catch((err) => {
        console.log(err);
      });
  }, [id_artist, id_album, id_track]);
  return trackData === undefined ? (
    <Loading />
  ) : (
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
              <h5 className="card-title">{trackData.track}</h5>
              <p className="card-text">{trackData.album}</p>
              <p className="card-text">{trackData.artist}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lyrics-section">{lyrics}</div>
    </div>
  );
}
