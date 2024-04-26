import AWS from '../assets/SkillsPhotos/aws.png';
import CSS from '../assets/SkillsPhotos/css.png';
import GitHub from '../assets/SkillsPhotos/github.png';
import HTML from '../assets/SkillsPhotos/html.png';
import JavaScript from '../assets/SkillsPhotos/javascript.png';
import React from '../assets/SkillsPhotos/react.png';
import Figma from '../assets/SkillsPhotos/figmaLogo.png';
import Node from '../assets/SkillsPhotos/node-icon.png'
import Mongo from '../assets/SkillsPhotos/mongodb.png';


const Skills = () => {
    return (
        <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
            {/*Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2d88c1]'>Skills</p> {/*Change the pink underline*/}
                    <p className='py-4'>These are the languages i've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GitHub</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                        <p className='my-4'>AWS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={React} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>
                        
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Figma} alt="Figma" />
                        <p className='my-4'>Figma</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="node" />
                        <p className='my-4'>Node</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="node" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                
                
                </div>
            </div>
        </div>
    );
};

export default Skills