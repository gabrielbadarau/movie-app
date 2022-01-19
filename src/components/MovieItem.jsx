import React from 'react'

class MovieItem extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        const {title,overview,vote_average,poster_path,release_date} = this.props.details;
        const srcImage=poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : './images/no_image.png';

        return (
            <div>
                <img className="img-fluid w-25" src={srcImage} alt="Something went wrong" />
            </div>
        )
    }
}

export default MovieItem