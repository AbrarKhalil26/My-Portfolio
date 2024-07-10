import React from 'react'
import aboutImg from '../assets/about.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { about } from '../data/data';


const About = () => {
  return (
    <div className='my-20'>
      <h2 className='about text-5xl ms-24 mb-7 text-headingColor font-bold'>About</h2>
      <div className='flex gap-16'>
        <div className='flex flex-col gap-8 w-7/12'>
          <p className='text-lg text-gray-500'>
            I'm Abrar Hosny, a graduate of Computer and Information Sciences, I am particularly, interested in React JS and learning new technologies by creating projects and getting science. I'm dedicated to continuous learning and personal growth, ensuring I stay informed and updated.
          </p>
          <div className='col-span-2 text-gray-600 leading-10' style={{ fontSize: '1rem'}}>
            {
              about.map((item) => {
                const { id, title, info } = item
                return (
                  <p key={id} className='flex items-center gap-3'><IoIosArrowRoundForward/> <sapn className="font-bold">{title}:</sapn> {info}</p>
                )
              })
            }
          </div>
        </div>
        <div className='relative'>
          <div className='absolute top-0 left-0 w-full h-full bg-white opacity-30'></div>
          <img src={aboutImg} alt='about' className='w-96 h-96 object-cover rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default About
