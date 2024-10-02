import React, { useContext } from "react";
import { UserContext } from "../provider/MovieProvider";
import "./Main.css";

export default function Main() {
  const { state } = useContext(UserContext);

  return (
    <div className="main-container">
      {state.loading && <p className="loading">로딩중...</p>}
      {state.error && <p className="error">에러 발생: {state.error}</p>}
      {!state.loading && state.movies.length > 0 && (
        <ul className="movie-list">
          {state.movies.map((movie) => (
            <li className="movie-item" key={movie.id}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <div className="movie-info">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-overview">{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
