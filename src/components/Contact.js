import React from 'react'
import styled from 'styled-components';
import { followMe, mainFollowMe } from '../data/data';

const Title = styled.h2 ` &::after { left: calc(10rem + 105px) }`;

const Contact = () => {
  return (
    <div>
      <Title className=" title ms-24 mb-16">
        Contact Us
      </Title>

      <p className='text-lg text-gray-500 mb-6'>
        You can contact us with the following information:
      </p>
      <div className='flex justify-between gap-6'>
        <div>
          <ul className='text-2xl text-gray-600 flex gap-6 mb-12'>
            {followMe.map((item) => (
              <li key={item.id} className='hover:text-accentColor'>
                <a href={item.url}>{item.icon}</a>
              </li>
            ))}
          </ul>
          <div className='flex gap-6 flex-col'>
            {
              mainFollowMe.map((item) => (
                <div className='flex gap-4 items-center'>
                  <div className='bg-sky-200/25 text-sky-700 p-4 rounded-full text-xl'>{item.icon}</div>
                  <div>
                    <p className='font-bold text-lg/6 text-gray-500 font-heading-font'>{item.title}</p>
                    <p className='text-sm/6 text-gray-500'>
                      {item.title === 'Email' ? (
                        <a href={`mailto:abrarkhalil135@gmail.com`} className='hover:text-accentColor'>{item.info}</a>
                      ) : item.title === 'Call Us' ? (
                      <a href={`tel:+201550504283`} className='hover:text-accentColor'>{item.info}</a>
                      ) : (
                        <span>{item.info}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <form className='flex flex-col gap-4 p-10 rounded-lg' style={{ boxShadow: ' 0 0 10px 1px #ddd'}}>
            <div className='flex gap-4'>
              <input type='text' placeholder='First Name' className='border-2 border-gray-300 p-2 rounded-md w-1/2' />
              <input type='text' placeholder='Last Name' className='border-2 border-gray-300 p-2 rounded-md w-1/2' />
            </div>
            <input type='email' placeholder='Email' className='border-2 border-gray-300 p-2 rounded-md' />
            <textarea placeholder='Message' className='border-2 border-gray-300 p-2 rounded-md'></textarea>
            <button className='bg-accentColor text-white p-2 rounded-md'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
