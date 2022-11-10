import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import TrackCard from "./TrackCard";

export default function ResultPage(props) {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState();
  let url = `https://api.happi.dev/v1/music${location.search}&limit=12&lyrics=true`;

  useEffect(
    () => {
      // setIsLoading(true);
      fetch(url, {
        headers: {
          "x-happi-key":
            "b74680hnKpCjizznI3vzGzQyUD4gS8clkWjTGgQVGUp8daEi4uxFlKzs",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          props.fetchTrackData(response.result.cover);
          setSearchResult(response.result);
        })

        .catch((err) => {
          console.log(err);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.search]
  );

  const trackData = (data) => {
    props.fetchTrackData(data);
  };

  function noResult() {
    return (
      <div>
        <h1 className="no-result">Nothing can be found</h1>
      </div>
    );
  }
  return searchResult === undefined ? (
    <Loading />
  ) : searchResult <= 0 ? (
    noResult()
  ) : (
    <div>
      <div className="row row-cols-2 row-cols-md-6 m-auto g-4 container">
        <TrackCard data={searchResult} trackCover={trackData} />
      </div>
    </div>
  );
}
