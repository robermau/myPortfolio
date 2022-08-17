import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bgImage.jpg'

export const Technologys = () => {
  return (
    <>
    <div className="  text-white">

    <Link  to='/'>
            <div className='text-white   font-medium flex p-20 items-center bg-black '>
          
                <svg xmlns="http://www.w3.org/2000/svg" className=" z-10  h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                <h2 className="  z-10  font-normal text-2xl">Back to Home</h2>
            </div>
            </Link>
        <img className='absolute   w-full h-full -z-50' src={bgImage}/>
		<div className="mx-auto flex flex-col md:flex-row">
			<div className="flex flex-col w-full lg:w-3/5 ">
				<h1 className="text-3xl md:text-5xl text-center text-white font-bold my-4 leading-relaxed md:leading-snug">My Technology's
				</h1>
				
			</div>
		</div>


		<div className="flex flex-wrap text-center md:text-left px-8 md:px-4 lg:px-8">

			<div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6 overflow-hiddden">
				<div>
					<img className="border-4 border-yellow-500 rounded-full bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/0FaVJay.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>React</b></p>
					
				</div>
			</div>

			<div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/S3mmmfw.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>HTML</b></p>
					
				</div>
			</div>

			<div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/Yj7DNj8.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>CSS</b></p>
					
				</div>
			</div>

			<div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/4pBXhIi.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>React Native</b></p>
					
				</div>
			</div>

			<div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/IDFdqFJ.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>JavaScript</b></p>
				
				</div>
			</div>

			<div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/AmXk8Vi.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>Redux</b></p>
				
				</div>
			</div>


            <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/2THVOP5.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>Node JS</b></p>
					
				</div>
			</div>


            <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/NmKQPAz.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>Express JS</b></p>
					
				</div>
			</div>


            <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/4ggiK0U.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>Mongo DB</b></p>
					
				</div>
			</div>
            <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/RVsMO1u.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>Git Bash</b></p>
					
				</div>
			</div>
            <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/u1cm4oO.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>GitHub</b></p>
					
				</div>
			</div>
            <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/6">
				<div>
					<img className="border-4 border-yellow-500 rounded-full  bg-white transition duration-500 hover:border-black mx-auto md:mx-0 w-24 md:w-auto"
                        src="https://i.imgur.com/mSL8thr.png"
                        alt="user-avatar"/>
					<p className="text-lg text-center mt-4 md:mt-8"><b>Tailwind CSS</b></p>
				
				</div>
			</div>

		</div>
	</div>
    </>
  )
}
export default Technologys;