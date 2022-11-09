import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ResultPage from "./Components/ResultPage";
import SongLyrics from "./Components/SongLyrics";
import Footer from "./Components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [trackData, setTrackData] = useState([]);
  const [trackCover, setTrackCover] = useState();
  function handleData(data) {
    setData(data);
    return data;
  }
  function handleTrackData(trackData, trackCover) {
    setTrackData(trackData);
    setTrackCover(trackCover);
    return trackData, trackCover;
  }
  return (
    <div className="App">
      <div className="container">
        <div className="home-background"></div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={handleData} />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="/search"
          element={<ResultPage data={data} fetchTrackData={handleTrackData} />}
        />
        <Route
          path="track"
          element={<SongLyrics trackData={trackData} cover={trackCover} />}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
