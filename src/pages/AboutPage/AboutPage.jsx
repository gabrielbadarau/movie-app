import React from 'react';
import './AboutPage.css'
import {ReactComponent as TheMovieDB} from '../../assets/icons/themoviedb.svg'

function AboutPage() {
  return (
  <div className='container-fluid container-min-max-width mt-3 text-center'>
      <h1>Film data</h1>
      <p>All film-related metadata used in Gabriel's Movie App, including actor, director and studio names, synopses, release dates, trailers and poster art is supplied by <a href='https://www.themoviedb.org/'>The Movie Database</a> (TMDb).</p>
      <TheMovieDB style={{width:'250px'}} fill="#90cea1" />
      <p>Gabriel's Movie App uses the TMDb API but is not endorsed or certified by TMDb.</p>
  </div>
  )
}

export default AboutPage;
