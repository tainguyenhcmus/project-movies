import React, { useMemo, useState } from 'react'
import './style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { NavLink } from "react-router-dom";
import { CONSTANT_LINKS, getConstantLinkDetail } from "../../models/links";

type Props = {
  movie: any,
  isGridView?: boolean
}
const defaultImgURL = 'https://via.placeholder.com/600x400/a3f3ff/f00808?text=defaultImage'

const MovieBlock = ({ movie, isGridView }: Props) => {
  return (
    <NavLink className='movie-card--child card text-decoration-none' to={getConstantLinkDetail(CONSTANT_LINKS.route_movies_detail, movie.id)}>
      <div className={`${isGridView ? 'movie-card--child--custom-grid' : 'movie-card--child--custom-list'}`}>
        <LazyLoadImage
          alt={'...'}
          effect="blur"
          width={'100%'}
          className='movie-card--child--image'
          src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : defaultImgURL} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title link-opacity-100" onClick={() => { null }}>{movie.original_title}</h5>
          <span className='text-secondary'>{movie.release_date}</span>
          {isGridView && <span className='text-secondary'>{movie.overview}</span>}
        </div>
      </div>
    </NavLink>
  )
}

export { MovieBlock }