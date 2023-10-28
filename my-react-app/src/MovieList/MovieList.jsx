import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const[movies, setMovies ] = useState(null)
    const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
    
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

useEffect(() => {
    
       axios.get(url, options).then((response) => {
        setMovies(response) 
        console.log(movies)
    })

}, [])



  


  return (
    <div className='bg-blue-500  h-[50vh]'>MovieList</div>
  )
}

export default MovieList