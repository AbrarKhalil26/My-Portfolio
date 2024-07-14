import React from 'react'
import aboutImg from '../assets/about.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { about } from '../data/data';
import { Skills, Title } from "../components";

const Mobile = () => (
  <div className='flex flex-col gap-8'>
    <p className='text-lg text-gray-500'>
      I'm Abrar Hosny, a graduate of Computer and Information Sciences, I am particularly, interested in React JS and learning new technologies by creating projects and getting science. I'm dedicated to continuous learning and personal growth, ensuring I stay informed and updated.
    </p>
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-white opacity-30'></div>
      <img src={aboutImg} alt='about' className='w-96 h-96 object-cover rounded-xl'/>
    </div>
    <div className='col-span-2 text-gray-600 leading-10' style={{ fontSize: '1rem'}}>
      {
        about.map((item) => {
          const { id, title, info } = item
          return (
            <p key={id} className='flex items-center gap-3'>
              <IoIosArrowRoundForward />
              <span className="font-bold">{title}:</span>
              {title === 'Email' ? (
                <a href={`mailto:abrarkhalil135@gmail.com`} className='hover:text-accentColor'>{info}</a>
              ) : title === 'Phone' ? (
              <a href={`tel:+201550504283`} className='hover:text-accentColor'>{info}</a>
              ) : (
                <span>{info}</span>
              )}
            </p>
          )
        })
      }
    </div>
  </div>
)

const About = ({isMobile}) => {
  return (
    <div className='grid gap-36'>
      <div>
        <Title title='About'/>
        {
          isMobile ? <Mobile/> : (
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
                    <p key={id} className='flex items-center gap-3'>
                      <IoIosArrowRoundForward />
                      <span className="font-bold">{title}:</span>
                      {title === 'Email' ? (
                        <a href={`mailto:abrarkhalil135@gmail.com`} className='hover:text-accentColor'>{info}</a>
                      ) : title === 'Phone' ? (
                      <a href={`tel:+201550504283`} className='hover:text-accentColor'>{info}</a>
                      ) : (
                        <span>{info}</span>
                      )}
                    </p>
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
          )
        }
        
      </div>
      <Skills />
    </div>
  )
}

export default About
