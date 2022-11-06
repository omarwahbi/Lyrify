import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import TrackCard from "./Components/TrackCard";

function App() {
  const [data, setData] = useState([]);
  function handleData(data) {
    console.log(data);
    setData(data);
    return data;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={handleData} />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/search" element={<TrackCard data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
