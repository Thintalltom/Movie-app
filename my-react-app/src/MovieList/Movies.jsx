import React from 'react'

const Movies = ({genres, image, title, id, year, rating }) => {
  return (
    <div className='p-4'> 
     
        <div className='flex gap-9 border-2 border-slate-200 p-2'>
            <img src={image} className='w-[200px]' />
            <div>
            <p className='font-extrabold'>{title}</p>
            <p className='font-extrathin'>{year}</p>
            <p >{rating}</p>
            <p>{genres}</p>
            </div>
            <button>view more</button>
         
        </div>

    </div>
  )
}

export default Movies