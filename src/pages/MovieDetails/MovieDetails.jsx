import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ReactComponent as RedHeart } from '../../assets/icons/heart-solid.svg';

// useLocation for retrieveing state from the Link component
function formatDate(date){
  // we try to return MM/DD/YYYY
  let newDate = date.split("-").reverse().join('/')
  return newDate;
}

function handleAddToFavoriteButton(){
  document.getElementById('heart').classList.toggle("removeFavoriteButton")
  // document.getElementById('heart').classList.add("removeFavoriteButton")
}

function MovieDetails() {
  const {title,overview,vote_average,poster_path,release_date,popularity}=useLocation().state;
  let srcImage=poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : './images/no_image.png';
  let date=release_date ? formatDate(release_date) : null
  return(
    <div className='container p-0 mt-5 mb-3 row justify-content-center'>
      <div className='img-movie-container col-12 col-md-5 col-lg-4'>
        <img className="img-movie" src={srcImage} alt="Something went wrong" />
      </div>
      <div className='info-movie-container mt-1 col-12 col-md-7 col-lg-8'>
        <h2>{title}</h2>
        <p>{date} (US)</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Number of reviews</h4>
        <p>{popularity}</p>
        <h4>Vote average</h4>
        <div className='container d-flex flex-row align-items-center'>
          <div id="scoreCircleMovie-movie" style={{ width: 100, height: 100}}>
            <CircularProgressbar 
              value={vote_average*10} 
              text={`${vote_average*10}%`}
              styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '30px',
                  pathTransition:'none',
                  pathColor: `rgb(44, 130, 75)`,
                  textColor: '#050505',
                  trailColor: '#1f402b'
              })}
            />
          </div>
          <div className='d-flex flex-column text-center'>
            <button className='addListButton'>Add to my watch list</button>
            <button 
            id="heart"
            className='addFavoriteButton'
            onClick={()=>handleAddToFavoriteButton()}
            >
              <RedHeart style={{width:'35px'}}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;
