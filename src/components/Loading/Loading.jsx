import React, { useEffect, useState } from "react";

import { FidgetSpinner } from "react-loader-spinner";

const Loading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const delay = 2000; // Set the desired delay time in milliseconds

    const timer = setTimeout(() => {
      setShowLoader(false); // Hide the loading spinner after the delay
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {showLoader && (
        <>
          <FidgetSpinner
            height="150"
            width="150"
            color="#4fa94d"
          />
          <span
            style={{
              color: "blue",
              fontWeight: "bolder",
              letterSpacing: "2px",
            }}
          >
            QuickSell
          </span>
        </>
      )}
    </div>
  );
};

export default Loading;
