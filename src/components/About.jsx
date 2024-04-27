import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2d88c1]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Sheheryar Tayyabi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Hello, I'm Sheheryar Tayyabi, a passionate full-stack developer dedicated to creating digital experiences. I excel in crafting responsive web applications that prioritize user
              satisfaction. With expertise in HTML, CSS, and JavaScript, I bring design concepts to life with dynamic functionality and
              cross-browser compatibility. I implement maintainable code and continuously strive to stay updated with the latest technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;