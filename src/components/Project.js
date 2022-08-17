import Mobile from "./Mobile";
import bgProjects from '../assets/bgProjects.mp4'
import { Link } from "react-router-dom";



function Projects() {

    return (
        <>
        <video className=' absolute h-screen object-cover w-full  opacity-50 ' autoPlay loop src={bgProjects} />
        <div className=" flex flex-col h-full w-auto  ">
        
        <Link to='/'>
            <div className='text-white font-medium flex p-20 items-center bg-black '>
          
                <svg xmlns="http://www.w3.org/2000/svg" className=" z-10  h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                <h2 className="  z-10  font-normal text-2xl">Back to Home</h2>
            </div>
            </Link>
            <div className="flex flex-col justify-center  items-center pt-10 text-3xl  bg-black">
                <h1 className=" z-10 font-medium text-white">My Projects Web</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className=" z-10 h-20 w-20  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="flex flex-row items-start justify-around w-full h-full pt-10 bg-black">
         
                <div className="">
                    <div className="relative max-w-xs mb-10 ml-10 overflow-hidden shadow-lg group h-96">
                        <a href="https://gea-store.herokuapp.com" className="absolute top-0 bottom-0 left-0 right-0 z-10" />
                        <img
                            className="block  transition-opacity duration-700 bg-white h-96 rounded-3xl group-hover:opacity-40"
                            src="https://i.imgur.com/11edXTK.png"
                        />
                        <div
                            className="absolute right-0 flex items-center w-full transition-all duration-700 bg-black opacity-0 group-hover:-top-0 group-hover:opacity-100 top-full h-1/2">
                            <div className=""
                            >
                                <video className="w-full" src="https://i.imgur.com/EE44EMI.mp4"
                                    type="video/webm" autoPlay loop preload="none" muted="muted">

                                </video>
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 block w-full text-base text-white transition-all duration-700 opacity-50 bg-gradient-to-br from-green-800 to-blue-800 top-full h-1/2 group-hover:top-1/2 group-hover:opacity-100">
                            <div className="py-4 text-xs px-7">
                                <div className="text-xl font-bold"> Gea-Store</div>
                                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Developer:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <a href="https://gea-store.herokuapp.com"> Proyect in group</a>												</span>
                                </div>
                                <div className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Technology's:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <p>ReactJS,MongoDB,Express,Tailwind,<br /> Material UI, CSS</p> 									</span>
                                </div>

                            </div>
                            <div className="absolute left-0 pt-1 pl-7">
                                <button className="block px-4 text-base text-green-300 duration-700 border-2 rounded-sm border-opacity-20 bg-gradient-to-b from-green-400 to-green-800">
                                    <a href="https://gea-store.herokuapp.com">Buy Here</a>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="relative max-w-xs mb-10 ml-10 overflow-hidden shadow-lg group h-96">
                        <a href="https://mytinerary-perez.herokuapp.com/" className="absolute top-0 bottom-0 left-0 right-0 z-10" />
                        <img
                            className="block object-cover transition-opacity duration-700 h-96 rounded-3xl group-hover:opacity-40"
                            src="https://i.imgur.com/X0ZkDkq.png"
                        />
                        <div
                            className="absolute right-0 flex items-center w-full transition-all duration-700 bg-black opacity-0 group-hover:-top-0 group-hover:opacity-100 top-full h-1/2">
                            <div className=""
                            >
                                <video className="w-full" src="https://i.imgur.com/RmDbLCW.mp4"
                                    type="video/webm" autoPlay loop preload="none" muted="muted">

                                </video>
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 block w-full text-base text-white transition-all duration-700 opacity-50 bg-gradient-to-br from-green-800 to-blue-800 top-full h-1/2 group-hover:top-1/2 group-hover:opacity-100">
                            <div className="py-4 text-xs px-7">
                                <div className="text-xl font-bold"> My Tinerary</div>
                                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Developer:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <a href="https://store.steampowered.com/developer/DigitalExtremes?snr=1_4_600__629"> Roberto Perez</a>												</span>
                                </div>
                                <div className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Technology's:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <p>ReactJS,MongoDB,Express,Tailwind</p> 									</span>
                                </div>

                            </div>
                            <div className="absolute left-0 pt-1 pl-7">
                                <button href="https://mytinerary-perez.herokuapp.com/" className="block px-4 text-base text-green-300 duration-700 border-2 rounded-sm border-opacity-20 bg-gradient-to-b from-green-400 to-green-800">
                                    Travel here
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative max-w-xs mb-10 ml-10 overflow-hidden shadow-lg group h-96">
                        <a href="https://amazingeventsrmp.netlify.app/" className="absolute top-0 bottom-0 left-0 right-0 z-10" />
                        <img
                            className="block transition-opacity duration-700 h-96 rounded-3xl group-hover:opacity-40"
                            src="https://i.imgur.com/Qbz82nv.png"
                        />
                        <div
                            className="absolute right-0 flex items-center w-full transition-all duration-700 bg-black opacity-0 group-hover:-top-0 group-hover:opacity-100 top-full h-1/2">
                            <div className=""
                            >
                                <video className="w-full" src="https://i.imgur.com/fLvua7i.mp4"
                                    type="video/webm" autoPlay loop preload="none" muted="muted">

                                </video>
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 block w-full text-base text-white transition-all duration-700 opacity-50 bg-gradient-to-br from-green-800 to-blue-800 top-full h-1/2 group-hover:top-1/2 group-hover:opacity-100">
                            <div className="py-4 text-xs px-7">
                                <div className="text-xl font-bold"> Amazing Events</div>
                                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Developer:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <a href="https://amazingeventsrmp.netlify.app/"> Roberto Perez</a>												</span>
                                </div>
                                <div className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Technology's:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <p>HTML , CSS , JavaScript</p> 									</span>
                                </div>

                            </div>
                            <div className="absolute left-0 pt-1 pl-7">
                                <button href="https://amazingeventsrmp.netlify.app/" className="block px-4 text-base text-green-300 duration-700 border-2 rounded-sm border-opacity-20 bg-gradient-to-b from-green-400 to-green-800">
                                    Look any Festival
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
               
                </div>
                

                <Mobile />
            </div>
            
            
          
            
        </>
    )



}
export default Projects;