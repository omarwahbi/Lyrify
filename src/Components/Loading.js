import React from "react";
import LoadingLogo from "../assets/loading.png";
export default function Loading() {
  return (
    <div>
      <img className="loadingLogo" src={LoadingLogo} />
    </div>
  );
}
