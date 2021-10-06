import React, { useState } from "react";
import { imageUrl } from "./slides";

import { Slide } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Cards from "../components/cards";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = imageUrl.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // const nextTime = setTimeout(
  //   (function next() {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //     next();
  //   }),
  //   2000
  // );

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageUrl) || length <= 0) {
    return null;
  }

  // setInterval(next,4000);

  return (<>
    
    <div className="slider" style={{zIndex:"10"}}>
      <NavigateNextIcon className="prev" onClick={prev} />
      <NavigateNextIcon className="next" onClick={next} />
      {imageUrl.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}>
            {index === current && (
              <img src={slide.image} alt="Homepage Slides" className="image" />
            )}
          </div>
        );
      })}
    </div>
    <div style={{marginTop:"-400px", zIndex:"20"}}>
      <Cards  /></div>
    </>
  );
};

export default ImageSlider;
