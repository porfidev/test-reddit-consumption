import React from "react";
import loadingImage from "./loading.gif";

function Loading() {
  return (
    <div className="loading">
      <img alt="loading image" src={loadingImage} />
    </div>
  );
}

export default Loading;
