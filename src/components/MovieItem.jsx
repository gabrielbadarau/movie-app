import React from 'react'
import './MovieItem.css'

class MovieItem extends React.Component {

    constructor(props){
        super(props);
        this.state={}
    }

    formatDate(date){
        // we try to return MM/DD/YYYY
        let newDate = date.split("-").reverse()
        let copy=newDate[0];
        newDate[0]=newDate[1];
        newDate[1]=copy;
        newDate= new Date(newDate.join('/'))
        return newDate.toString().substr(4,11)
    }

    render() {
        const {title,overview,vote_average,poster_path,release_date} = this.props.details;
        let srcImage=poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : './images/no_image.png';
        let releaseDate=release_date ? this.formatDate(release_date) : 'No Release Date'
        return (
            <div className='card-container m-3 d-flex flex-column'>
                <div className='image-container'>
                    <img className="img-card" src={srcImage} alt="Something went wrong" />
                </div>
                <div className='content-container text-center'>
                    <h4>{title}</h4>
                    <p>{releaseDate}</p>
                </div>
            </div>
        )
    }
}

export default MovieItem