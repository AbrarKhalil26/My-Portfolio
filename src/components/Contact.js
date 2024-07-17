import React from 'react'
import { followMe, mainFollowMe } from '../data/data';
import { Title } from "../components";

const Contact = () => {
  return (
    <div>
      <Title title='Contact'/>

      <p className='text-lg text-gray-500 mb-6' data-aos="fade-right" data-aos-duration="1000">
        You can contact us with the following information:
      </p>
      <div className='flex justify-between gap-6 flex-col xl:flex-row'>
        <div data-aos="fade-right" data-aos-duration="1000">
          <ul className='text-2xl text-gray-600 flex gap-6 mb-12'>
            {followMe.map((item) => (
              <li key={item.id} className='hover:text-accentColor'>
                <a href={item.url}>{item.icon}</a>
              </li>
            ))}
          </ul>
          <div className='flex gap-6 flex-col md:flex-row xl:flex-col mb-7 xl:mb-0 justify-evenly xl:justify-start'>
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
        <div data-aos="fade-left" data-aos-duration="1000">
          <form className='flex flex-col gap-4 p-10 rounded-lg bg-white' style={{ boxShadow: "0px 5px 90px 0px rgba(0, 0, 0, 0.1)" }}>
            <div className='flex gap-4'>
              <input type='text' placeholder='Full Name' className='border-2 border-gray-300 p-2 rounded-md w-1/2' />
              <input type='email' placeholder='Email' className='border-2 border-gray-300 p-2 rounded-md w-1/2' />
            </div>
            <input type='text' placeholder='Subject' className='border-2 border-gray-300 p-2 rounded-md' />
            <textarea placeholder='Message' className='border-2 border-gray-300 p-2 rounded-md'></textarea>
            <button className='bg-accentColor text-white p-2 rounded-md'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
