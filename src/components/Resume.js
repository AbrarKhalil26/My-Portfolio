import React from 'react'
import styled from 'styled-components';

const Title = styled.h2 ` &::after { left: calc(10rem + 145px) }`;

const Resume = () => {
  return (
    <div>
      <Title className=" title">
        Resume / CV
      </Title>
      <p className='text-lg text-gray-500'>
        You can download my resume and CV here.
      </p>
      <div className='mt-10 flex gap-4'>
        <button className="btn btn-primary">
          <a href="https://drive.google.com/file/d/10i9CoybwUMwYYdkKmxVM3d1Rv4KYGpvk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </button>
        <button className="btn btn-secondary" style={{ border: '1px solid var(--accent-color)'}}>
          <a href="https://drive.google.com/file/d/1GSlhahF-a3FYkJxXfmWfQxCDPRHIoUfz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </button>
      </div>
    </div>
  )
}

export default Resume
