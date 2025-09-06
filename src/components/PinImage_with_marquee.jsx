import React from 'react'

const PinImage_with_marquee = ({image}) => {
  return (
     <div className='h-full w-full'>
        <div className={`h-full w-1/3 mx-auto rounded-3xl bg-no-repeat bg-[url('/image/${image}.jpg')] bg-cover`}></div>
     </div>
  )
}

export default PinImage_with_marquee
