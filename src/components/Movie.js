import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  vote_count,
  release_date,
}) => (
  <div className="movie">
    <div className="movie-content">
      <img src={IMG_API + poster_path} alt={title} />
      {/* <img src={IMG_API + background_path} alt={title}/> */}

      <div className="movie-info">
        <h3>{title}</h3>
        <div className="review">
          <div className="grade">
            평점 <span>{vote_average}</span>
          </div>
          <div className="like">
            <button>
              <i className="far fa-thumbs-up"></i>
            </button>
            <span>{vote_count}</span>
          </div>
        </div>
        <div className="startDay">
          상영시작일<span>{release_date}</span>
        </div>
      </div>

      <div className="movie-over image-blur">
          스토리 :
        <p>{overview}</p>
      </div>
    </div>
  </div>
);

export default Movie;
