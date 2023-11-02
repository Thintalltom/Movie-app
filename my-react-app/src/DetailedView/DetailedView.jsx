import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailedView = () => {
  const { itemId } = useParams(); // Get the ID from the route parameter
  const [films, setFilms] = useState({});

  const url = `https://imdb-top-100-movies.p.rapidapi.com/${itemId}`;
  console.log(url);
  const options = {
    headers: {
      "X-RapidAPI-Key": "a844195ae0msh1fbee6d2d56602cp18da5djsn5c6202c811c3",
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

  const { title, description, image, director, genre, trailer, rating } = films;

  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <p>{films.title}</p>
          <img src={films.image} />
          <p className="text-center">{films.description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
