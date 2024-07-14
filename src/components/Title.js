import React from 'react'

const Title = ({ title, w }) => {
  return (
    <div className='relative mb-10 text-center sm:w-72' style={{ width: w ? w : '350px', height: '51px'}}>
      <div className='absolute top-1/2 left-0 w-full bg-accentColor rounded-full' style={{ zIndex: '1', height: '3px'}}></div>
      <h3 className='absolute left-1/2 -translate-x-1/2 text-4xl sm:text-5xl text-headingColor font-bold text-center bg-white px-3' style={{ zIndex: '2'}}>{title}</h3>
    </div>
  )
}

export default Title
