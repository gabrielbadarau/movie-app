import React from 'react'
import './MovieItem.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import lozad from 'lozad'
import {Link} from 'react-router-dom'

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
        const {title,vote_average,poster_path,release_date} = this.props.details;
        let srcImage=poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : './images/no_image.png';
        let releaseDate=release_date ? this.formatDate(release_date) : 'No Release Date'
        const observer = lozad(); 
        observer.observe();
        return (
            <div className='card-container m-3 d-flex flex-column'>
                <Link 
                    style={{textDecoration:'none',color:'black'}} 
                    to={`${title}`}
                    state={this.props.details}
                >
                    <div className='image-container'>
                        <img className="lozad img-card" src={srcImage} alt="Something went wrong" />
                        <div id="scoreCircle" style={{ width: 35, height: 35}}>
                        <CircularProgressbar 
                            value={vote_average*10} 
                            text={`${vote_average*10}%`}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '30px',
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
                </Link>
            </div>
        )
    }
}

export default MovieItem