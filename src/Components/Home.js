import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

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
  let url = `https://api.happi.dev/v1/music?q=${searchValue}&limit=12&lyrics=true`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="home-background"></div>
        <h1 className="heading ">
          Lyric search could not be <strong>EASIER!</strong>
        </h1>
        <Search keyDown={handleKeyDown} />
        {/* <Footer /> */}
      </div>
    );
  }
}
