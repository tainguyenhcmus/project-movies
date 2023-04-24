import React from 'react'
import './OverViewCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  movie: any
}

const defaultImgURL = 'https://via.placeholder.com/600x400/a3f3ff/f00808?text=defaultImage'

const OverViewCard = ({ movie }: Props) => {
  return (
    <div className='d-flex flex-row w-100 bg-gradient h-50 rounded-5'>
      <div className='w-50'>
        {movie.poster_path}
        <LazyLoadImage
          alt={'...'}
          effect="blur"
          width={'100%'}
          wrapperClassName='wrapper-lazy-image'
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImgURL} />
      </div>

      <div className='w-50  bg-gradient right-overview'>
        <span>{movie.original_title}</span>
        <p>Overview</p>
        <span>{movie.overview}</span>
      </div>
    </div>
  )
}

export { OverViewCard }