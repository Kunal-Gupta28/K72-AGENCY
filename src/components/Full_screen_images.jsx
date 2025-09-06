import React from 'react'

const Full_screen_images = (props) => {
  return (
      <div className="h-screen w-full bg-cover bg-center relative rounded-[3vw] overflow-hidden">

        {/* image */}
        <img
          src={props.image}
          alt={props.alt || "Full screen background"}
          className="absolute inset-0 h-full w-full object-center z-0"
        />

        {/* text */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white">

          {/* text1 */}
        <p className="mb-2 text-sm font-light uppercase tracking-widest text-gray-200">
          {props.text1}
        </p>

        {/* text2 */}
        <p className="text-6xl font-bold md:text-8xl">
          {props.text2}
        </p>
      </div>

      {/* A subtle dark overlay to make the white text more readable */}
       <div className="absolute inset-0 bg-black opacity-20 z-5"></div>
      </div>

  )
}

export default Full_screen_images

