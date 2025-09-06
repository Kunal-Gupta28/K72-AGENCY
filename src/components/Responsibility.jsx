import React from 'react'

const Responsibility = (props) => {
  return (
    <div className='h-[80px] w-full border-t-2 border-b-2 bg-black text-white flex justify-between' style={{fontWeight:500}}>
      <p className='text-[1.1rem] p-3'>{props.post}</p>
      <p className='h-full text-[2.3rem] flex items-center'>{props.post_holder}</p>
    </div>
  )
}

export default Responsibility
