import React from 'react'
import MovieList from '../../components/MovieList'
import axios from 'axios';
import themoviedbApiKey from '../../configs/themoviedb';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:"",
            list:[]
        };
    }

    updateSearchText(event){
        this.setState({searchText:event.target.value})
    }

    fetchData(){
        let param=this.state.searchText.split(' ').join('%20')
        let url=`https://api.themoviedb.org/3/search/movie?api_key=${themoviedbApiKey}&language=en-US&query=${param}`;

        axios.request(url)
        .then(response=>{
            const list=response.data.results;
            this.setState({list});
        })
        .catch(function(error){
            console.log(error)
        })
    }

    submitSearch(event){
        event.preventDefault();
        this.fetchData()
    }

    render(){
        return (
            <div>
                <form
                onSubmit={(event)=>this.submitSearch(event)}
                >
                    <label htmlFor="search"></label>
                    <input
                        type="text"
                        id="search"
                        onChange={(event) => this.updateSearchText(event)}
                    />
                    <input type="submit" value="Search" />
                </form>
                <MovieList />
            </div>
        )
    }
}

export default HomePage
