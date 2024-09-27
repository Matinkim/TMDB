import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({
  title,
  poster_path,
  // vote_average,
  release_date,
  // overview,
}) {
  return (
    <div className="movie-container">
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{release_date}</span>
        {/* <span>{vote_average}</span> */}
        {/* <span>{overview}</span> */}
      </div>
    </div>
  );
}
