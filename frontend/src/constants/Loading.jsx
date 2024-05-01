import React from "react";

const Loading = () => {
  return (
    <>
      <div
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(50%, 400%)",
        }}
      >
        <div
          class="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="sr-only"></span>
        </div>
      </div>
    </>
  );
};

export default Loading;
