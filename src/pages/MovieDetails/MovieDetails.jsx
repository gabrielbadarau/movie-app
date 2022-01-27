import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// useLocation for retrieveing state from the Link component
function formatDate(date){
  // we try to return MM/DD/YYYY
  let newDate = date.split("-").reverse().join('/')
  return newDate;
}

function MovieDetails() {
  const {title,overview,vote_average,poster_path,release_date,popularity}=useLocation().state;
  let srcImage=poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : './images/no_image.png';
  let date=release_date ? formatDate(release_date) : null
  return(
    <div className='container mt-5 mb-3 row'>
      <div className='img-movie-container col-sm-3'>
        <img className="img-movie" src={srcImage} alt="Something went wrong" />
      </div>
      <div className='info-movie-container mt-1 col-sm-8'>
        <h2>{title}</h2>
        <p>{date} (US)</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Number of reviews</h4>
        <p>{popularity}</p>
        <h4>Vote average</h4>
        <div id="scoreCircleMovie-movie" style={{ width: 120, height: 120}}>
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
      </div>
    </div>
  )
}

export default MovieDetails;
