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
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Sheheryar Tayyabi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            Hello, I'm Sheheryar Tayyabi, a full-stack developer passionate about crafting digital experiences. 
            Throughout my journey, I've acquired a diverse skill set, mastering HTML, CSS,
            JavaScript, React, and Java, enabling me to create responsive and captivating web applications and fullstack programs.
            On the backend, I leverage Node.js for server-side development and manage databases using MongoDB 
            and SQL. GitHub is my go to version control tool, while Figma fuels my design endeavors.
            I take great pride in writing code that's not just functional but also clean and maintainable. Always eager to embrace new technologies, 
            I'm committed to continuous learning and sharpening my skills to stay at the forefront of innovation.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;