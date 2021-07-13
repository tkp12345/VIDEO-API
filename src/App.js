import React ,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


/*main Component */
import Carousel_slider from './components/main/Carousel.js';

import Movie from './components/Movie';
import VideoList from './components/youtube_list/youtube_list';

  const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584";
  
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  
  const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";

function App() {
  //youtube Api
  const[videos, setVideos] = useState([]);
  //영화 Api
  const [movies, setMovies] = useState([]);
 //검색 APi
  const[searchTerm, setSearchTerm] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCgBtRdCQWAqIF5OXnj9tpUMqczK4d_9gk&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCgBtRdCQWAqIF5OXnj9tpUMqczK4d_9gk", requestOptions)
    .then(res => res.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error',error)); 
  }, []);

  
  useEffect(()=>{
    fetch(FEATURED_API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    });
  
  }, []);

  const handleOnsubmit = (event) =>{
  event.preventDefault()
  console.log('검색!');
  fetch(SEARCH_API+searchTerm)
  .then(res => res.json())
  .then(data => {
    setMovies(data.results);
  });
  }

  //검색처리 
  const handleOnChange = (event) =>{
  setSearchTerm(event.target.value); 
  }
 
  return (
    <>
      <header>
        <form onSubmit={handleOnsubmit}>
        <input 
        className="search" 
        type="text" 
        placeholder="영화 제목 입력.."
        value={searchTerm}
        onChange={handleOnChange}
        />
        </form>
      </header>
      <div className="carousel">
          <Carousel_slider />
        </div>
      <div className="movie-container">
      {
        movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))
      }
      <VideoList videos={videos}/>
      
    </div>
    </>
  )
}

export default App
