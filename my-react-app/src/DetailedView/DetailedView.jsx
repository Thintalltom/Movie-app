import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailedView = () => {
  const { itemId } = useParams(); // Get the ID from the route parameter
  const [films, setFilms] = useState({});

  const url = `https://imdb-top-100-movies.p.rapidapi.com/${itemId}`;
  console.log(url);
  const options = {
    headers: {
      "X-RapidAPI-Key": "09999574a3mshabd0ed26da46e06p1f86ffjsn788695c664bc",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const getFilms = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setFilms(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilms();
  }, [itemId]);

  const { writers, title, year, description, trailer_embed_link,
    big_image, director, genre, trailer, rating } = films;

  return (
    <div className="flex justify-center gap-[20px] items-center bg-slate-900 text-white font-bold">
      <div >
        <div>
          <p className="text-3xl font-extrabold">{films.title}</p>
          {films.trailer && (
            <iframe
              width="1000"
              height="500"
              src={films.trailer_embed_link
              } // Provide the YouTube video URL here
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          <div className="flex flex-col gap-[20px]">
          <div className="border-y-2 border-slate-500"> Movie Year: {films.year}</div>
      <div className="border-x-2 border-slate-500 "> Movie genre:      {Array.isArray(films.writers) ? (
            <ul>
              {films.genre.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          ) : (
            <p>{films.genre}</p>
          )}</div>
          <div className=" w-[700px] border-x-2 border-slate-500  font-bold  "> Movie description: {films.description}</div>
          <div className="border-x-2 border-slate-500"> Movies rating: {films.rating}</div>
          <div className="border-x-2 border-slate-500 gap-4">Movies Writer:      {Array.isArray(films.writers) ? (
            <ul>
              {films.writers.map((writer, index) => (
                <li key={index}>{writer}</li>
              ))}
            </ul>
          ) : (
            <p>{films.writers}</p>
          )}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailedView;
