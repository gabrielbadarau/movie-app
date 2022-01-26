import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props){
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mt-4">
            {
                props.list.map((movieData)=><MovieItem key={movieData.id} details={movieData} />)
            }
        </div>
    )
    
}

export default MovieList
