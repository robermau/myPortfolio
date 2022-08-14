import React from 'react';
import Fade from 'react-reveal/Fade';
import videoBg from '../assets/videoBg.mp4'
import yo from '../assets/yo.png'





function Hero() {

    return (
        <div className='flex items-center justify-center'>
            <Fade right>
                <img className="absolute h-auto max-w-full mt-12 ml-64 rounded-full w-60 pb-80" src={yo} alt="yo" />

                <div className='absolute z-10 flex flex-row mt-40'>
                    
                    <button className="z-10 px-10 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl">
                <a href='./PerezRobertoEnglish.pdf'>My Cv English</a>
                    </button>
                  
                    <div>
                    <button className="px-10 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl">
                         <a href='./PerezRoberto.pdf'>Mi Cv Español</a>
                    </button>
                    </div>
                </div>

                <h1 className="absolute flex-col items-center justify-center text-4xl font-medium text-white">Hello world👋!! I'm Roberto Mauro Perez <br /> <span className='text-2xl '>I'm Full Stack Developer, With a taste for technology for a long time, I like to help others and be in continuous learning.</span> </h1>

            </Fade>

            <video className='object-cover w-full h-screen ' autoPlay loop src={videoBg} />


        </div>





    )

}
export default Hero;