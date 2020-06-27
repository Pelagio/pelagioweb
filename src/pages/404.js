import * as React from "react";

export default () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <iframe
        title="404 gif"
        src="https://giphy.com/embed/l41m6PbmLtD13ok8M"
        width="320"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
    </div>
  );
};
