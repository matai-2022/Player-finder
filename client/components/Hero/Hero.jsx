import React from 'react'

const Hero = () => {
  return (
    <section className="w-full flex flex-col p-4 sm:flex-row sm:w-10/12 my-5 sm:px-10 s:py-6 sm:justify-center">
      <div className=" w-6/12 mr-5 sm:w-6/12 self-center text-center sm:text-left">
        {/*text side */}
        <p className="text-4xl w-full font-extrabold sm:text-6xl ">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="mt-2 mb:4 sm:my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          veritatis et accusantium deserunt atque molestias, molestiae assumenda
          id, praesentium unde temporibus nihil modi expedita corporis autem
          libero sunt natus aspernatur!
        </p>
      </div>
      <div className="self-center">
        <img
          className="shadow-lg object-fill my-5"
          src="/images/Friendly.jpeg"
          alt="Group of friendly people laughing"
        />
      </div>
    </section>
  )
}

export default Hero
