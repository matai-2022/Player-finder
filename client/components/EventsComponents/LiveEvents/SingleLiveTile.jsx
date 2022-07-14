import React from 'react'

const SingleLiveTile = ({ name, date, max, description }) => {
  return (
    <div style={{margin: '2em'}}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{max} players</p>
      <article>{description}</article>
    </div>
  )
}

export default SingleLiveTile
