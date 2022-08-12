import React from 'react';
import Fade from 'react-reveal/Fade';
import videoBg from '../assets/videoBg.mp4'
import yo from '../assets/yo.png'


function Hero() {

    return (
        <div className='flex justify-center items-center'>
             <Fade right>
            <img className=" absolute w-60 pb-80 ml-64 mt-12 max-w-full h-auto rounded-full" src={yo} alt="yo"/>

           

                <h1 className="absolute flex-col justify-center items-center font-medium text-4xl text-white">Hello world👋!! I'm Roberto Mauro Perez <br/> <span className=' text-2xl '>I'm Full Stack , With a taste for technology for a long time, I like to help others and be in continuous learning.</span> </h1>

            </Fade>
            <video className=' w-full h-screen object-cover' autoPlay loop src={videoBg} />
        </div>





    )

}
export default Hero;