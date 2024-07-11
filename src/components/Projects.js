import React from 'react'
import styled from 'styled-components';

const Title = styled.h2 ` &::after { left: calc(10rem - -45px) }`;

const Projects = () => {
  return (
    <div>
      <Title className='title ms-24 mb-7'>Projects</Title>
    </div>
  )
}

export default Projects
