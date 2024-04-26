import React from 'react';
import Mern from '../assets/DemoPhotos/mern.webp';
import MarketImg from '../assets/DemoPhotos/cloudapplications.svg';
import Ecommerce from '../assets/DemoPhotos/ecommerce-photo.jpg';
import Netflix from '../assets/DemoPhotos/netflix.webp';
import YoutubeImg from '../assets/DemoPhotos/youtube.avif';
import Figma from '../assets/DemoPhotos/figmaPreview.png';

import DemoImg2 from '../assets/DemoPhotos/marketplacedemo.jpg';
import DemoImg3 from '../assets/DemoPhotos/youtubedemo.jpg';
import DemoImg4 from '../assets/DemoPhotos/netflixImage.png';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {/* MERN Workout App */}
          <div className="content-div">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${Mern})` }}
              className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto h-64 bg-cover bg-center"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-50 rounded-md">
                <span className="text-xl font-bold text-white">
                  Workout Tracker App
                </span>
                <div className="pt-4">
                  <button
                    className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg mr-2"
                    onClick={() =>
                      window.open(
                        'https://drive.google.com/file/d/1BVi-HK410FeEN-4rBB9k_3pcf9vnWReN/view?usp=sharing',
                        '_blank'
                      )
                    }
                  >
                    Demo
                  </button>
                  <a
                    href="https://github.com/sherrytayyabi/mern-workout-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Marketplace App */}
          <div className="content-div">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${MarketImg})` }}
              className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto h-64 bg-cover bg-center"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-50 rounded-md">
                <span className="text-xl font-bold text-white">
                  Marketplace App - React
                </span>
                <div className="pt-4">
                  <button
                    className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg mr-2"
                    onClick={() => window.open(DemoImg2, '_blank')}
                  >
                    Demo
                  </button>
                  <a
                    href="https://github.com/sherrytayyabi/react-marketplace-app/tree/master"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ecommerce Dashboard */}
          <div className="content-div">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${Ecommerce})` }}
              className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto h-64 bg-cover bg-center"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-50 rounded-md">
                <span className="text-xl font-bold text-white">
                  Ecommerce Dashboard
                </span>
                <div className="pt-4">
                  <a
                    href="https://syncfusion-ecomm-dashboard.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg mr-2">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/sherrytayyabi/admin-dashboard-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Netflix App */}
          <div className="content-div">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${Netflix})` }}
              className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto h-64 bg-cover bg-center"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-50 rounded-md">
                <span className="text-xl font-bold text-white">
                  Netflix App - React
                </span>
                <div className="pt-4">
                  <button
                    className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg mr-2"
                    onClick={() => window.open(DemoImg4, '_blank')}
                  >
                    Demo
                  </button>
                  <a
                    href="https://github.com/sherrytayyabi/react-netflix-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Youtube Website Design */}
          <div className="content-div">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${YoutubeImg})` }}
              className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto h-64 bg-cover bg-center"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-50 rounded-md">
                <span className="text-xl font-bold text-white">
                  Youtube Website Design
                </span>
                <div className="pt-4">
                  <button
                    className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg mr-2"
                    onClick={() => window.open(DemoImg3, '_blank')}
                  >
                    Demo
                  </button>
                  <a
                    href="https://github.com/sherrytayyabi/html-css-youtube-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Login Page - Figma */}
          <div className="content-div">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${Figma})` }}
              className="shadow-lg group container rounded-md flex justify-center text-center items-center mx-auto h-64 bg-cover bg-center"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 p-4 bg-black bg-opacity-50 rounded-md">
                <span className="text-xl font-bold text-white">
                  Login Page - Figma
                </span>
                <div className="pt-4">
                  <button
                    className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg mr-2"
                    onClick={() => window.open(DemoImg7, '_blank')}
                  >
                    Demo
                  </button>
                  <a
                    href="https://www.figma.com/file/XhE8kFaV3NCUMymKn71Fzw/LoginPage?type=design&node-id=0-1&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg">
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
