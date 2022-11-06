import React from "react";

export default function Search(props) {
  return (
    <div>
      <input
        className="search-bar form-control"
        type={"search"}
        placeholder={"Search for any song lyrics you like"}
        onKeyDown={props.keyDown}
      ></input>
    </div>
  );
}
