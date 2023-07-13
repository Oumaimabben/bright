

import React, { useEffect, useRef } from 'react';
import Logo from './Logo';




const LogoSlider = () => {

  const logosRef = useRef(null);

   useEffect(() => {

    const logosSlide = logosRef.current.querySelector('.logos-slide');

    const copy = logosSlide.cloneNode(true);

    logosRef.current.appendChild(copy);

  }, []); 




  return (

    <div className="overflow-hidden py-[20px] bg-white whitespace-nowrap" ref={logosRef}>

      <div className="logos-slide inline-block animate-slide-infinite">
          

      <Logo src1='https://e0.pxfuel.com/wallpapers/955/344/desktop-wallpaper-silver-click-pen-on-open-book-%C2%B7-stock-open-notebook-thumbnail.jpg' src='https://e0.pxfuel.com/wallpapers/345/285/desktop-wallpaper-b-e-c-c-a-on-s-c-h-o-o-l-book-aesthetic-book-study-aesthetic-thumbnail.jpg' name='google'/>

    </div>

    </div>

  );

};




export default LogoSlider;