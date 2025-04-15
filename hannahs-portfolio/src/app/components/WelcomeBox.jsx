import { Parallax } from 'react-parallax';
import React from 'react';

const WelcomeBox = () => (
<Parallax className='relative h-[500px]' bgImage="./bgImg.jpg" strength={800}>
  <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full text-white bg-black bg-opacity-50 p-4'>
    <span className='text-2xl font-bold text-center md:text-4xl lg:text-5xl'>
      Welcome to my portfolio!<br />
      I am a passionate software engineer with a love for coding and technology.
      <br />
      I enjoy creating innovative solutions and learning new skills.
      <br />
      Feel free to explore my work and get in touch!
    </span>
  </div>
</Parallax>
);

export default WelcomeBox;