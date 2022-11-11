import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import ResultPage from "./Components/ResultPage";
import SongLyrics from "./Components/SongLyrics";
import Layout from "./Components/Layout";

import "./App.css";

function Routes() {
  const [trackCover, setTrackCover] = useState();

  function handleTrackData(trackCover) {
    setTrackCover(trackCover);
    // eslint-disable-next-line no-sequences
    return trackCover;
  }
  return (
    <div className="app">
      <Layout>
        <div className="main-content w-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route
              path="/search"
              element={<ResultPage fetchTrackData={handleTrackData} />}
            />
            <Route
              path="track/artists/:id_artist/albums/:id_album/tracks/:id_track"
              element={<SongLyrics cover={trackCover} />}
            />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default Routes;
