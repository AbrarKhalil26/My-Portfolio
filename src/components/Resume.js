import React from 'react'
import { Title } from "../components";

const Resume = () => {
  return (
    <div>
      <Title title='Resume/CV' w={{ default: '290px', sm: '420px' }} />
      <p className='text-lg text-gray-500'>
        You can download my resume and CV here.
      </p>
      <div className='mt-10 flex gap-4 flex-wrap justify-center sm:justify-start'>
        <button className="btn btn-primary hover:bg-accentColor hover:border-white hover:text-white transition-all duration-300">
          <a href="https://drive.google.com/file/d/10i9CoybwUMwYYdkKmxVM3d1Rv4KYGpvk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </button>
        <button className="btn btn-secondary hover:border-accentColor hover:bg-white hover:text-accentColor transition-all duration-300" style={{ border: '2px solid var(--accent-color)'}}>
          <a href="https://drive.google.com/file/d/1GSlhahF-a3FYkJxXfmWfQxCDPRHIoUfz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </button>
      </div>
    </div>
  )
}

export default Resume
