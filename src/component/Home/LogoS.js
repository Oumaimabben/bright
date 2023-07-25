import React, { useEffect, useRef } from "react";
import Logo from "./Logo";

const LogoSlider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosRef.current.querySelector(".logos-slide");

    const copy = logosSlide.cloneNode(true);

    logosRef.current.appendChild(copy);
  }, []);

  return (
    <div
      className="overflow-hidden py-[20px] bg-white whitespace-nowrap"
      ref={logosRef}
    >
      <div className="logos-slide inline-block animate-slide-infinite">
        <Logo />
      </div>
    </div>
  );
};

export default LogoSlider;
