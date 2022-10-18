import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import loader from "../../assets/loading.mp4";
import loadersmall from "../../assets/loading-small.mp4";
const SplashLoader = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <video
        playsInline
        loop
        muted
        // src={loader}
        ref={videoEl}
        className="w-screen h-screen object-cover"
      >
        <source src={loadersmall} media="max-width:400px" type="video/mp4" />
        <source src={loader} type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashLoader;
