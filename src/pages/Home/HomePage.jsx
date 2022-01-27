import React from 'react'
import './HomePage.css'

import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { useNavigate } from "react-router-dom";

function HomePage(){

    const navigate = useNavigate();

    function SubmitSearch(event){
        event.preventDefault();
        navigate(`/search/${document.getElementById('search').value}`);
    }

    return (
        
            <div className="container-fluid container-min-max-width mt-3">
                <div className="text-center "> 
                    <form
                    className='searchForm'
                    onSubmit={(event)=>SubmitSearch(event)}
                    >
                        <label htmlFor="search"></label>
                        <input
                            type="text"
                            id="search"
                            placeholder='Search for a movie...'
                        />
                        <label>
                            <input
                                id="submitButton"
                                type="submit" 
                            />
                            <Search style={{marginLeft:"2px",marginBottom:"5px"}} className='search-svg' />
                        </label>
                    </form>
                </div>
            </div>
        
    )
}

export default HomePage
