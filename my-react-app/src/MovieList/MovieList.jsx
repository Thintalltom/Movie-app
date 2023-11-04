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
}) => {
  return (
    <div className="bg-slate-900  h-[screen] gap-9 p-[20px] ">
      
        <div className="grid  grid-cols-3 justify-items-center text-white gap-4">
          <button className="border-2 rounded-[10px] border-slate-300 w-[100px]  padding-[2px]">
            Drama
          </button>
          <button className="border-2 rounded-[10px] border-slate-300 w-[100px]  padding-[2px]">
            History
          </button>
          <button className="border-2 rounded-[10px] border-slate-300 w-[100px]  padding-[2px]">
            Biography
          </button>
          <button className="border-2 rounded-[10px] border-slate-300 w-[100px]  padding-[2px]">
            Western
          </button>
          <button className="border-2 rounded-[10px] border-slate-300 w-[100px]  padding-[2px]">
            Action
          </button>
        </div>

        <div className="flex flex-col bg-white ">
          {currentItems.map((items) => {
            return (
              <Link to={`/detailedView/${items.id}`}>
                <Movies
                  genres={items.genre}
                  image={items.image}
                  title={items.title}
                  id={items.id}
                  year={items.year}
                  rating={items.rating}
                />
              </Link>
            );
          })}
        </div>
    

      <p>total Pages: {totalPages}</p>
      <div className="flex justify-around">
        <button onClick={prevPage} className="bg-slate-500 text-white">
          prev {currentPage.length}
        </button>
        <button onClick={nextPage} className="bg-slate-500 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
