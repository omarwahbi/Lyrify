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
      navigate({
        pathname: "/search",
        search: `?q=${event.target.value}`,
      });
    }
  };

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
