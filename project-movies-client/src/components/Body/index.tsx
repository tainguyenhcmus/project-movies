import React from 'react'
import './style.css'

type Props = {
  children?: JSX.Element,
}

const Body = ({ children }: Props) => {
  return (
    <div className='body-controller bg-dark d-flex'>{children}</div>
  )
}

export { Body };