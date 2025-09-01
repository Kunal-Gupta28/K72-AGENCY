import React from 'react'

const Montreal = () => {
  return (
        <div className='flex items-center'>
            <span className='me-4 select-none'>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="16" cy="16" r="14"/>
                    <ellipse cx="16" cy="16" rx="7" ry="14"/>
                    <ellipse cx="16" cy="16" rx="14" ry="7"/>
                  </g>
                </svg>
            </span> MONTREAL_<span className='select-none'>04:02:13</span>
        </div>
  )
}

export default Montreal
