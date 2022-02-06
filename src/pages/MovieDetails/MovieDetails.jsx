import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ReactComponent as RedHeart } from '../../assets/icons/heart-solid.svg';
import {connect} from 'react-redux'
import {addToWatchList,removeFromWatchList,addToFavorite,removeFromFavorite} from '../../redux/actions/list';
import {writeUsers} from '../../apis/firebase'

// useLocation for retrieveing state from the Link component
function formatDate(date){
  // we try to return MM/DD/YYYY
  let newDate = date.split("-").reverse().join('/')
  return newDate;
}

function MovieDetails(props) {

  useEffect(() => {
    let docData={
      watchList:props.watchList,
      favoriteList:props.favoriteList
    }
    if(props.userEmail!==undefined){
      writeUsers(props.userEmail,docData)
    }
  });

  const {id,title,overview,vote_average,poster_path,release_date,popularity}=useLocation().state;
  const movie={id,title,overview,vote_average,poster_path,release_date,popularity}
  let srcImage=poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : './images/no_image.png';
  let date=release_date ? formatDate(release_date) : null

  function checkElementOfArray(name){
    return name.title===title;
  }
  
  let valueButton;
  let colorHeart;

  // we check if the movoie already exists in our Watch List
  function checkWatchListForTitle(){
    if(props.watchList.find(checkElementOfArray))
    {
      valueButton="Remove from my watch list";
    }
    else{
      valueButton="Add to my watch list";
    }
  }

// we check if the movoie already exists in our Favorite List
  function checkFavoriteListForTitle(){
    if(props.favoriteList.find(checkElementOfArray))
    {
      colorHeart='red'
    }
    else{
      colorHeart='black'
    }
  }
  
  function handleFavoriteButton(){
    if(colorHeart==='black'){
      props.addToFavorite(movie)
    }
    else{
      props.removeFromFavorite(movie)
    }
  }

  function handleWatchListButton(){
    if(valueButton==="Add to my watch list")
    {
      props.addToWatchList(movie)
    }
    else{
      props.removeFromWatchList(movie)
    }
  }

  checkWatchListForTitle();
  checkFavoriteListForTitle()
  
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
            <button 
              className='listButton'
              onClick={()=>handleWatchListButton()}
            >
              {valueButton}</button>
            <button 
            id="heart"
            className='addFavoriteButton'
            onClick={()=>handleFavoriteButton()}
            >
              <RedHeart fill={colorHeart} style={{width:'35px'}}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    addToWatchList:(movie)=>dispatch(addToWatchList(movie)),
    removeFromWatchList: (movie)=>dispatch(removeFromWatchList(movie)),
    addToFavorite:(movie)=>dispatch(addToFavorite(movie)),
    removeFromFavorite:(movie)=>dispatch(removeFromFavorite(movie))
  }
}

function mapStateToProps(state){
  return {
    userEmail:state.signInMethod.user.email,
    watchList:state.list.watchList,
    favoriteList:state.list.favoriteList
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
