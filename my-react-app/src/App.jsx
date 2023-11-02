import { useState, useEffect } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MovieList from "./MovieList/MovieList";
import DetailedView from "./DetailedView/DetailedView";

function App() {
  const [movies, setMovies] = useState([]); // Initialize as an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const url = `https://imdb-top-100-movies.p.rapidapi.com?page=${currentPage}&limit=${itemsPerPage}`;

  const options = {
    headers: {
      "X-RapidAPI-Key": "a844195ae0msh1fbee6d2d56602cp18da5djsn5c6202c811c3",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const getMovies = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [currentPage, itemsPerPage]);

  //This line calculates the total number of pages needed to display all the movies while adhering to a specified number of items per page.
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  //This line calculates the index of the first movie to display on the current page.
  const startIndex = (currentPage - 1) * itemsPerPage;
  //This line calculates the index of the movie just after the last movie to be displayed on the current page.
  const endIndex = startIndex + itemsPerPage;
  //This line uses the calculated startIndex and endIndex to extract a subset of movies from the movies array.
  const currentItems = movies.slice(startIndex, endIndex);

  // Function to move to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="flex  ">
        <Navbar />
        <Routes>
          <Route path="/" element={   <MovieList currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} currentItems={currentItems} />} />
          <Route path="/detailedView/:itemId" element={   <DetailedView movies={movies}  />} />
        </Routes>
        
         
         
         
      </div>
    </>
  );
}

export default App;
