import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailedView = () => {
  const { itemId } = useParams(); // Get the ID from the route parameter
  const [films, setFilms] = useState({});

  const url = `https://imdb-top-100-movies.p.rapidapi.com/${itemId}`;
  console.log(url);
  const options = {
    headers: {
      "X-RapidAPI-Key": "c4ac43b0ccmsh73d7353f3f3a9eap14f604jsn40aa5a3dec2d",
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
    <div className="flex justify-center gap-[20px] p-4 mt-[10px] items-center bg-slate-900 text-white">
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
          <div className="font-light"> Movie Year: {films.year}</div>
      <div className="font-light "> Movie genre:  
      {Array.isArray(films.genre) ? (
             <p>{films.genre.join(',')}</p>
            
          ) : (
            <p>{films.genre}</p>
          )}
         </div>
          <div className=" w-[700px]  font-light  "> Movie description: {films.description}</div>
          <div className="font-light"> Movies rating: {films.rating}</div>
          <div className="font-light gap-4">Movies Writer:      {Array.isArray(films.writers) ? (
             <p>{films.writers.join(',')}</p>
            
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
