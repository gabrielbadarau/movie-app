import React from 'react';
import './FavoritePage.css'
import {connect} from 'react-redux'
import MovieList from '../../components/MovieList';
import {Outlet,useParams} from "react-router-dom";
import ScrollButton from '../../components/ScrollButton'

function FavoritePage(props) {
  const {name}=useParams();
  return (
  <div>
    <div className='container-fluid justify-content-center d-flex container-min-max-width mt-3'>
        {!props.favoriteList.length ? <h2 className='mt-5'>Your favorite list is empty!</h2> : 
        <div>
          {!name ? <MovieList list={props.favoriteList} /> :<Outlet/>}
        </div>
        }
        <ScrollButton />
      </div>
  </div>
  )
}

function mapStateToProps(state){
    return{
      favoriteList:state.list.favoriteList
    }
}

export default connect(mapStateToProps)(FavoritePage);
 