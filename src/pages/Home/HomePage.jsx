import React, {useState} from 'react'
import MovieList from '../../components/MovieList'
import axios from 'axios';
import themoviedbApiKey from '../../configs/themoviedb';
import './HomePage.css'
import Layout from '../../components/Layout';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import ScrollButton from '../../components/ScrollButton'

function HomePage(){

    const [state,setState]=useState({
        moviesList:[],
        checkEmptyList:false
    })
    
    function submitSearch(event){
        event.preventDefault();
        fetchData()
        document.getElementById('search').value=""
    }

    function fetchData(){
        let param=document.getElementById('search').value.split(' ').join('%20')
            let url=`https://api.themoviedb.org/3/search/movie?api_key=${themoviedbApiKey}&language=en-US&query=${param}&include_adult=false`;
    
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

    return (
        <Layout>
            <div className="container-fluid container-min-max-width mt-3">
                <div className="text-center "> 
                    <form
                    className='searchForm'
                    onSubmit={(event)=>submitSearch(event)}
                    >
                        <label htmlFor="search"></label>
                        <input
                            type="text"
                            id="search"
                            placeholder='Search for a movie...'
                        />
                        <label>
                            <input
                                id="submitButton"
                                type="submit" 
                            />
                            <Search style={{marginLeft:"2px",marginBottom:"5px"}} className='search-svg' />
                        </label>
                    </form>
                </div>
                <MovieList list={state.moviesList} />
                {state.checkEmptyList===true ? <h1>Nothing found</h1>  : null}
            </div>
            <ScrollButton />
        </Layout>
    )
}

export default HomePage
