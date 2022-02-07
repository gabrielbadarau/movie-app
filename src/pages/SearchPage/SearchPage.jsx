import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ScrollButton from '../../components/ScrollButton'
import axios from 'axios';
import themoviedbApiKey from '../../configs/themoviedb';
import MovieList from '../../components/MovieList'
import { Outlet} from "react-router-dom";


function SearchPage() {
    const {text,name}=useParams();
    const [state,setState]=useState({
        moviesList:[],
        checkEmptyList:false
    })

    console.log(themoviedbApiKey)

    function fetchData(text){
        let url=`https://api.themoviedb.org/3/search/movie?api_key=${themoviedbApiKey}&language=en-US&query=${text}&include_adult=false`;

        axios.request(url)
        .then(response=>{
            const moviesList=response.data.results;
            if(moviesList.length){
                setState({moviesList,checkEmptyList:false})
            }
            else(
                setState({moviesList,checkEmptyList:true})
            )
        })
        .catch(function(error){
            console.log(error)
        })
    }

    useEffect(() => {
        fetchData(text);
    },[text]);


    return (
        <div className='container-fluid justify-content-center d-flex container-min-max-width mt-3'>
            {!name ? <MovieList list={state.moviesList} /> :<Outlet/>}
            {state.checkEmptyList===true ? <h2 className='mt-5'>Nothing found</h2>  : null}
            <ScrollButton />
        </div>
    )
}

export default SearchPage;
