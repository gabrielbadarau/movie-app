import React from 'react'
import MovieList from '../../components/MovieList'
import axios from 'axios';
import themoviedbApiKey from '../../configs/themoviedb';
import './HomePage.css'
import Layout from '../../components/Layout';
import { ReactComponent as Search } from '../../assets/icons/search.svg';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            moviesList:[]
        };
    }

    fetchData(){
        let param=document.getElementById('search').value.split(' ').join('%20')
        let url=`https://api.themoviedb.org/3/search/movie?api_key=${themoviedbApiKey}&language=en-US&query=${param}&include_adult=false`;

        axios.request(url)
        .then(response=>{
            const moviesList=response.data.results;
            this.setState({moviesList});
        })
        .catch(function(error){
            console.log(error)
        })
    }

    submitSearch(event){
        event.preventDefault();
        this.fetchData()
        document.getElementById('search').value=""
    }

    render(){
        return (
            <Layout>
                <div className="container-fluid container-min-max-width mt-3">
                    <div className="text-center "> 
                        <form
                        className='searchForm'
                        onSubmit={(event)=>this.submitSearch(event)}
                        >
                            <label htmlFor="search"></label>
                            <input
                                // value={this.state.searchText}
                                type="text"
                                id="search"
                                placeholder='Search for a movie...'
                                // onChange={(event) => this.updateSearchText(event)}
                            />
                            <label>
                                <input
                                    id="submitButton"
                                    type="submit" 
                                />
                                <Search style={{marginLeft:"2px"}} className='search-svg' />
                            </label>
                        </form>
                    </div>
                    <MovieList list={this.state.moviesList} />
                </div>
            </Layout>
        )
    }
}

export default HomePage
