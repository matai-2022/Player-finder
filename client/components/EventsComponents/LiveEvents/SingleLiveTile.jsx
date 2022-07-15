import React from 'react'

const SingleLiveTile = ({ name, date, max, description }) => {
  return (
    // each card
    <div className=" h-[20vh] bg-white w-[85vw] sm:w-[35vw] sm:h-[35vh] lg:w-[40vw] sm:mx-5 p-4 mx-auto my-4 flex flex-col items-center rounded-md shadow-xl hover:scale-105 duration-300">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="self-start my-2">
        {date} {max} players
      </p>
      <article className="self-start my-1">{description}</article>
    </div>
  )
}

export default SingleLiveTile
