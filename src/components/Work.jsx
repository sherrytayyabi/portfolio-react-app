import React from 'react';
import WorkImg from '../assets/DemoPhotos/expensephoto.jpg';
import MarketImg from '../assets/DemoPhotos/cloudapplications.svg';
import YoutubeImg from '../assets/DemoPhotos/youtube.avif';
import CrudImg from '../assets/SkillsPhotos/crud.png';
import WeatherImg from '../assets/DemoPhotos/weather.webp';
import TodoImg from '../assets/DemoPhotos/todo.jpg';
import ExpenseTrack from '../assets/DemoPhotos/expensephoto.jpg';
import Netflix from '../assets/DemoPhotos/netflix.webp';
import Figma from '../assets/DemoPhotos/figmaPreview.png';
import Ecommerce from '../assets/DemoPhotos/ecommerce-photo.jpg';


import DemoImg1 from '../assets/DemoPhotos/expensedemo.jpg';
import DemoImg2 from '../assets/DemoPhotos/marketplacedemo.jpg';
import DemoImg3 from '../assets/DemoPhotos/youtubedemo.jpg';
import DemoImg4 from '../assets/DemoPhotos/netflixImage.png';
import DemoImg5 from '../assets/DemoPhotos/tododemo.jpg';
import DemoImg6 from '../assets/DemoPhotos/weatherapp.png';
import DemoImg7 from '../assets/DemoPhotos/LoginPage.png';





const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#2d88c1]'>
                        Work
                    </p>
                    <p className='py-4'>Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb--10">

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Ecommerce})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-1xl font-bold text-white tracking-wider">
                                Ecommerce Dashboard
                            </span>
                            <div className="pt-8 text-center">

                                <a href="https://syncfusion-ecomm-dashboard.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/sherrytayyabi/admin-dashboard-app" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${MarketImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Marketplace App - React
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg2, '_blank')}
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/react-marketplace-app/tree/master" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Netflix})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Netflix App - React
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg4, '_blank')}
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/react-netflix-app" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${YoutubeImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Youtube Website Design
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg3, '_blank')}
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/html-css-youtube-design" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${CrudImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                CRUD REST API
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/CRUD-Rest-API" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${WeatherImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Weather App - React
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg6, '_blank')}
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/react-weather-app" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${TodoImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Todo App - React
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg5, '_blank')}
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/react-todo-app" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Figma})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Login Page - Figma
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg7, '_blank')}
                                >Demo</button>
                                <a href="https://www.figma.com/file/XhE8kFaV3NCUMymKn71Fzw/LoginPage?type=design&node-id=0-1&mode=design" target="_blank" rel="noopener noreferrer">
                                    <button>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-1xl font-bold text-white tracking-wider ">
                                Expense Tracker App - React
                            </span>
                            <div className="pt-8 text-center ">
                                <button
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    onClick={() => window.open(DemoImg1, '_blank')}
                                >Demo</button>
                                <a href="https://github.com/sherrytayyabi/expense-tracker-react" target="_blank" rel="noopener noreferrer">
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Work