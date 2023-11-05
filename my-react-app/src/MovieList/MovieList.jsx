import React from "react";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import { Link } from "react-router-dom";
const MovieList = ({
  nextPage,
  prevPage,
  currentItems,
  totalPages,
  currentPage,
  info,
  setInput
}) => {
  return (
    <div className="bg-slate-900  h-[screen] gap-9 p-[20px] ">
      
       <p className='text-center text-white text-2xl'>IMDB TOP 100 MOVIES</p>

        <div className="flex flex-col bg-white ">
          {currentItems.map((items) => {
            return (
              <div>
                <Movies
                  genres={items.genre}
                  image={items.image}
                  title={items.title}
                  id={items.id}
                  year={items.year}
                  rating={items.rating}
                  info={info}
                  setInput={setInput}
                />
              </div>
            );
          })}
        </div>
    

   
      <div className="flex justify-around mt-4">
        <button onClick={prevPage} className="rounded-[20px] p-[8px] bg-slate-500 text-white w-[100px]">
          prev {currentPage.length}
        </button>
        <button onClick={nextPage} className=" p-[8px] rounded-[20px] bg-slate-500 text-white w-[100px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
