import React from 'react'
import './MovieItem.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
        console.log(vote_average)
        return (
            <div className='card-container m-3 d-flex flex-column'>
                <div className='image-container'>
                    <img className="img-card" src={srcImage} alt="Something went wrong" />
                    <div id="scoreCircle" style={{ width: 35, height: 35}}>
                    <CircularProgressbar 
                        value={vote_average*10} 
                        text={`${vote_average*10}%`}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '36px',
                            pathTransition:'none',
                            pathColor: `rgb(44, 130, 75)`,
                            textColor: '#050505',
                            trailColor: '#1f402b'
                        })}
                    />
                    </div>
                </div>
                <div className='content-container text-center mt-3'>
                    <h4>{title}</h4>
                    <p>{releaseDate}</p>
                </div>
            </div>
        )
    }
}

export default MovieItem