import { useState, useEffect } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MovieList from "./MovieList/MovieList";
import DetailedView from "./DetailedView/DetailedView";

function App() {
  const [movies, setMovies] = useState([]); // Initialize as an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [input, setInput] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const url = `https://imdb-top-100-movies.p.rapidapi.com?page=${currentPage}&limit=${itemsPerPage}`;

  const options = {
    headers: {
      "X-RapidAPI-Key": "c4ac43b0ccmsh73d7353f3f3a9eap14f604jsn40aa5a3dec2d",
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

  const info = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

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
      <div className="bg-slate-900 h-screen">
      
        <Routes>
          <Route path="/" element={   <MovieList setInput={setInput} input={input} info={info} currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} currentItems={currentItems} />} />
          <Route path="/detailedView/:itemId" element={   <DetailedView movies={movies}  />} />
        </Routes>
        
         
         
         
      </div>
    </>
  );
}

export default App;
