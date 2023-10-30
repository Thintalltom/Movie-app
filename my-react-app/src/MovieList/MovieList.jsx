import React from "react";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]); // Initialize as an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const url =
    `https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=${currentPage}&limit=${itemsPerPage}`;

  const options = {
    headers: {
      "X-RapidAPI-Key": "a844195ae0msh1fbee6d2d56602cp18da5djsn5c6202c811c3",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  const getMovies = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.results)
      setMovies(result.results)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = movies.slice(startIndex, endIndex)

  return (
    <div className="bg-blue-500  h-[50vh]">
     {currentItems.map((items) => {
       return (
         <p>{items.title}</p>
       )
     })}

    
    </div>
  );
};

export default MovieList;
