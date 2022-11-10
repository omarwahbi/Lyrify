import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ResultPage from "./Components/ResultPage";
import SongLyrics from "./Components/SongLyrics";
function App() {
  const [trackCover, setTrackCover] = useState();

  function handleTrackData(trackCover) {
    setTrackCover(trackCover);
    // eslint-disable-next-line no-sequences
    return trackCover;
  }
  return (
    <div className="App">
      <div className="container">
        <div className="home-background"></div>
      </div>
      <Navbar />
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
