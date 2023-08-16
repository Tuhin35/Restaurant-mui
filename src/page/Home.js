import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg'
import '../Style/Homestyle.css'
import Hero from './Hero';
const Home = () => {
    return (
    <div>
        <Hero></Hero>
        <div>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
            <h1>Taste Harmony Hub </h1>
       <p>Best Food In Dhaka</p>
       <Link to='/menu'>
       <button> 
        Order Now
       </button>
       </Link>
        </div>
        
     </div>
        </div>
    </div>
         
        
    );
};

export default Home;