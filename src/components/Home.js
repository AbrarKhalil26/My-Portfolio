import React, { useEffect, useState } from 'react'
import heroBg from '../assets/hero-bg copy1.png'; // Import the image
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const TerminalText = ({ texts, speed }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const fullText = texts[currentTextIndex];
      let currentIndex = displayedText.length;

      if (!isDeleting) {
        setDisplayedText(prevText => {
          const nextChar = fullText[currentIndex];
          return nextChar ? prevText + nextChar : prevText;
        });

        if (currentIndex === fullText.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(prevText => prevText.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text in the array
        }
      }
    };

    const speedInterval = setInterval(typeText, speed);
    return () => clearInterval(speedInterval);
  }, [currentTextIndex, displayedText, isDeleting, texts, speed]);

  return <span className='border-b-2 border-accentColor'>{displayedText}</span>;
};


const Home = () => {
  const [showPipe, setShowPipe] = useState(true);

  useEffect(() => {
    const pipeInterval = setInterval(() => {
      setShowPipe(prevShow => !prevShow); // Toggle showPipe state every second
    }, 500);

    return () => clearInterval(pipeInterval);
  }, []);

  return (
    <>
      <img src={heroBg} alt='bg' className='absolute inset-0 block w-full h-full object-cover' style={{ zIndex: 1}}/>
      <div className='relative' style={{ zIndex: 3 }}>
        <h2 className='text-6xl font-bold text-headingColor font-heading-font mb-3'>Abrar Hosny</h2>
        <p className='text-2xl text-headingColor mb-8'>
          I'm <TerminalText texts={['Frontend Developer', 'Programming']} speed={200} />
          {showPipe && <span className='text-accentColor'>|</span>}
        </p>

        <ul className='text-2xl text-gray-600 flex gap-6'>
          <li>
            <a href='https://x.com/AbrarKh88684926'><FaXTwitter/></a>
          </li>
          <li>
            <a href='https://www.facebook.com/basma.star.789?mibextid=LQQJ4d'><FaFacebook/></a>
          </li>
          <li>
            <a href='https://www.instagram.com/abrarh18?igsh=MThydmo5bGllbThpcA%3D%3D&utm_source=qr'><FaInstagram/></a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/abrarkhalil26/'><FaLinkedin/></a>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Home
