import React from 'react';
import profileSvg from '../assets/DemoPhotos/meprogram.svg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-16 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2d88c1]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>Hi. I'm Sherry Tayyabi, nice to meet you. Please take a look around.</p>
            <div className='p-16' style={{ maxWidth: '100%', margin: 'auto' }}>
              <img src={profileSvg} alt='Profile' className='w-full h-auto rounded-full' />
            </div>
          </div>
          <div>
            <p>
              Welcome to my corner of the web! I'm Sheheryar Tayyabi, a passionate front-end developer with a keen eye for crafting seamless and engaging user experiences.
              My journey in the world of web development began with a fascination for turning ideas into interactive digital solutions.
              I thrive on the artistry of code and design, and I'm dedicated to creating websites that not only look stunning but also deliver a user-centric experience.
              With a solid foundation in HTML, CSS, and JavaScript, I specialize in translating design concepts into responsive and dynamic web applications.
              Whether it's implementing intricate animations, optimizing performance, or ensuring cross-browser compatibility, I take pride in writing clean, maintainable code that brings ideas to life.
              Continuous learning is at the core of my approach. In a rapidly evolving tech landscape, I stay up-to-date with the latest front-end technologies and best practices to deliver modern and future-proof solutions.
              Collaboration is key, and I enjoy working with cross-functional teams to bring diverse perspectives to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;