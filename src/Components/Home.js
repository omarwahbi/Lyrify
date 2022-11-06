import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Home(props) {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchValue(event.target.value);
    }
  };
  let url = `https://api.happi.dev/v1/music?q=${searchValue}`;
  useEffect(() => {
    if (searchValue === "") {
      return;
    } else {
      setIsLoading(true);
      fetch(url, {
        headers: {
          "x-happi-key":
            "b74680hnKpCjizznI3vzGzQyUD4gS8clkWjTGgQVGUp8daEi4uxFlKzs",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          props.data(response.result);
          navigate("/search");
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchValue]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="App">
        <div className="home-background"></div>
        <Navbar />
        <h1 className="position-absolute start-50 heading translate-middle">
          Lyric search could not be <strong>EASIER!</strong>
        </h1>
        <Search keyDown={handleKeyDown} />
      </div>
    );
  }
}
