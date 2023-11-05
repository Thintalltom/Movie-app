import React from 'react'
import { FiAlertCircle } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Movies = ({genres, image, title, id, year, rating, info }) => {
  return (
    <div className='p-4'> 
     
        <div className='lg:flex sm:flex sm:flex-col lg:flex-row  gap-9 border-2 border-slate-200 p-2'>
            <img src={image} className='lg:w-[150px] sm:w-[200px]' />
            <div>
            <p className='font-extrabold'>{title}</p>
            <p className='font-extralight'>Year: {year}</p>
            <p className='font-extralight flex gap-[5px]'><BsStarFill className='text-orange-500' /> {rating}</p>
            <p  className='font-extralight '>Genres: {genres.join(', ')}</p>
            </div>
            <Link to={`/detailedView/${id}`}>
            <FiAlertCircle />
              </Link>
        </div>

        

    </div>
  )
}

export default Movies