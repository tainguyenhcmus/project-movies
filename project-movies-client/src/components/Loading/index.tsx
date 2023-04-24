import React from 'react'
import './style.css';

type Props = object

const Loading = (props: Props) => {
  return (
    <div className="spinner-grow wrapper-loading" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export { Loading }