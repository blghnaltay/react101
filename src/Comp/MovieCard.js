import React, { useState, useEffect } from 'react';
import "./MovieCard.css";
export default function MovieCard(props) {
  const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => setShowDescription(true);
    const handleMouseLeave = () => setShowDescription(false);

  const handleClick = () => {
    console.log(props.tt);
  };
  return (
    <>
      <div id="MC" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {!showDescription && <img src={`https://image.tmdb.org/t/p/w500${props.url}`}></img>}
          {showDescription && <div id="desc"><p>{props.desc}</p></div>}
        <div>
          <p>{props.tt}</p>
          <div>{props.time}</div>
        </div>
      </div>
    </>
  );
}