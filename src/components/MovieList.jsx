import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props){
    return (
        <div>
            {
                props.list.map((movieData)=><MovieItem key={movieData.id} details={movieData} />)
            }
        </div>
    )
    
}

export default MovieList
