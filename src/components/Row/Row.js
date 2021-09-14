import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./Row.css";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rowPosters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className={`movieTile ${isLargeRow && "movieTileLarge"}`}>
                <img
                  className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />

                {!isLargeRow && (
                  <h4 className="movieName">
                    {truncate(movie?.name || movie?.title, 20)}
                  </h4>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
