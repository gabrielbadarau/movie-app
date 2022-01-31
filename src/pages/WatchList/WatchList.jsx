import React from 'react';

import './WatchList.css'
import {connect} from 'react-redux'
import MovieList from '../../components/MovieList';
import {Outlet,useParams} from "react-router-dom";
import ScrollButton from '../../components/ScrollButton'

function WatchList(props) {
    const {name}=useParams();
    return (
        <div className='container-fluid justify-content-center d-flex container-min-max-width mt-3'>
            {!props.watchList.length ? <h2 className='mt-5'>Your movie list is empty!</h2> : 
            <div>
                {!name ? <MovieList list={props.watchList} /> :<Outlet/>}
            </div>
            }
            <ScrollButton />
        </div>
    )
}

function mapStateToProps(state){
    return {
        watchList:state.list.watchList
    }
}

export default connect(mapStateToProps)(WatchList);
