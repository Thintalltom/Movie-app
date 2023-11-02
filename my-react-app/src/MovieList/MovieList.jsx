import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MovieList = ({nextPage, prevPage, currentItems, totalPages, currentPage}) => {


  return (
    <div className="bg-blue-500 w-[100vw]  h-[100vh] gap-9 ">
      <div>
        <div className="grid grid-cols-2 justify-items-center gap-4">
          {currentItems.map((items) => {
            return (
              <Link to={`/detailedView/${items.id}`}>
              <div key={items.id} className=" cursor-pointer bg-green-500 p-4 w-[300px] flex flex-col justify-center items-center">
                <img src={items.image} />
                <p className="gap-9 watch bg-slate-500 w-[300px] text-center">
                  {items.title}
                </p>
              </div>
              </Link>
            );
          })}
        </div>
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
