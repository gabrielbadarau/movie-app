import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  let {name}=useParams();
  console.log("i run")
  return(
    <div className='container-fluid container-min-max-width mt-3'>
      <h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1>
    </div>
  )
}

export default MovieDetails;
