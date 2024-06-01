import React from 'react';
import Mern from '../assets/DemoPhotos/mern.webp';
import MarketImg from '../assets/DemoPhotos/ecomm.webp';
import Ecommerce from '../assets/DemoPhotos/ecommerce-photo.jpg';
import Netflix from '../assets/DemoPhotos/netflix.webp';
import YoutubeImg from '../assets/DemoPhotos/youtube.avif';
import Figma from '../assets/DemoPhotos/figmaPreview.png';


import DemoImg1 from '../assets/DemoPhotos/mern.webp';
import DemoImg2 from '../assets/DemoPhotos/marketplacedemo.jpg';
import DemoImg3 from '../assets/DemoPhotos/youtubedemo.jpg';
import DemoImg4 from '../assets/DemoPhotos/netflixImage.png';
import DemoImg5 from '../assets/DemoPhotos/LoginPage.png';



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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">


          {/* Grid Item / MERN App */}
          <div
            style={{ backgroundImage: `url(${Mern})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Workout Tracker App
              </span>
              <div className="pt-8 text-center">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => window.open('https://drive.google.com/file/d/1BVi-HK410FeEN-4rBB9k_3pcf9vnWReN/view?usp=sharing', '_blank')} // Open demo in a new tab/window
                >
                  Demo
                </button>
                <a href="https://github.com/sherrytayyabi/mern-workout-app" target="_blank" rel="noopener noreferrer">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>



          {/*Grid Item / Marketplace App */}
          <div
            style={{ backgroundImage: `url(${MarketImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-1xl font-bold text-white tracking-wider ">
                Marketplace App
              </span>
              <div className="pt-8 text-center ">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => window.open(DemoImg2, '_blank')}
                >Demo</button>
                <a href="https://github.com/sherrytayyabi/react-marketplace-app" target="_blank" rel="noopener noreferrer">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>



          {/*Grid Item / Youtube App */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-1xl font-bold text-white tracking-wider ">
                Netflix Clone Application
              </span>
              <div className="pt-8 text-center ">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => window.open(DemoImg4, '_blank')}
                >Demo</button>
                <a href="https://github.com/sherrytayyabi/react-netflix-app" target="_blank" rel="noopener noreferrer">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>



          {/* Grid Item / Ecommerce Dashboard App */}
          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Ecommerce Dashboard App
              </span>
              <div className="pt-8 text-center">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => window.open('https://syncfusion-ecomm-dashboard.netlify.app/', '_blank')} // Open demo in a new tab/window
                >
                  Demo
                </button>
                <a href="https://github.com/sherrytayyabi/admin-dashboard-app" target="_blank" rel="noopener noreferrer">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>



          {/*Grid Item / Youtube Design */}
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
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>



          {/*Grid Item / Figma */}
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
                  onClick={() => window.open(DemoImg5, '_blank')}
                >Demo</button>
                <a href="https://www.figma.com/file/XhE8kFaV3NCUMymKn71Fzw/LoginPage?type=design&node-id=0-1&mode=design" target="_blank" rel="noopener noreferrer">
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