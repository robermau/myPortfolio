import { getAllByTitle } from '@testing-library/react';
import React from 'react'
import Gea from '../assets/Gea-Store.mp4'
import myTine from '../assets/mytinerary-perez.mp4'

function Mobile() {
    return (
        <>

   
            <div className="flex flex-col justify-center items-center text-3xl bg-black ">
                <h2 className=" z-10  font-medium text-white"> My Projects Mobile</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className=" z-10 h-20 w-20 mt-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <div className=" flex flex-row items-start justify-around w-full  pt-10 bg-black">
                
                <div className=" flex flex-row ">
                    <div className="relative max-w-xs mb-10 ml-10 overflow-hidden  shadow-lg group h-96">
                        <a href="https://drive.google.com/file/d/1MQxPozmDqrX4955cyrw7BGaKPiQZwCjR/view?usp=sharing" className="absolute top-0 bottom-0 left-0 right-0 z-10" />
                        <img
                            className="block  transition-opacity duration-700 bg-white h-96 rounded-3xl group-hover:opacity-40"
                            src="https://i.imgur.com/11edXTK.png"
                        />
                        <div
                            className="absolute right-0 flex items-center w-full transition-all duration-700 bg-black opacity-0 group-hover:-top-0 group-hover:opacity-100 top-full h-1/2">
                            <div className=""
                            >
                                <video className="w-full" src={Gea}
                                    type="video/webm" autoPlay loop preload="none" muted="muted">

                                </video>
                            </div>
                        </div>
                        <div className="absolute  left-0 right-0 block w-full text-base text-white transition-all duration-700 opacity-50 bg-gradient-to-br from-green-800 to-blue-800 top-full h-1/2 group-hover:top-1/2 group-hover:opacity-100">
                            <div className="py-4 text-xs px-7">
                                <div className="text-xl font-bold"> Gea-Store Mobile</div>
                                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Developer:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <a href="/"> Proyect in group</a>												</span>
                                </div>
                                <div className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Technology's:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <p>React Native,MongoDB,Express,<br /> Material UI, CSS</p> 									</span>
                                </div>

                            </div>
                            <div className="absolute left-0 pt-1 pl-7">
                                <button className="block px-4 text-base text-green-300 duration-700 border-2 rounded-sm border-opacity-20 bg-gradient-to-b from-green-400 to-green-800">
                                    <a href="https://gea-store.herokuapp.com">Buy Here</a>
                                </button>
                            </div>
                        </div>
                        

                    </div>

                    <div>
                    <div className="relative max-w-xs mb-10 ml-10 overflow-hidden shadow-lg group h-96">
                        <a href="https://drive.google.com/file/d/1BXDlrQreZ3lTBpEBr8DXFyfnO9mVqxbn/view?usp=sharing" className="absolute top-0 bottom-0 left-0 right-0 z-10" />
                        <img
                            className="block object-cover transition-opacity duration-700 h-96 rounded-3xl group-hover:opacity-40"
                            src="https://i.imgur.com/X0ZkDkq.png"
                        />
                        <div
                            className="absolute right-0 flex items-center w-full transition-all duration-700 bg-black opacity-0 group-hover:-top-0 group-hover:opacity-100 top-full h-1/2">
                            <div className=""
                            >
                                <video className="w-full" src={myTine}
                                    type="video/webm" autoPlay loop preload="none" muted="muted">

                                </video>
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 block w-full text-base text-white transition-all duration-700 opacity-50 bg-gradient-to-br from-green-800 to-blue-800 top-full h-1/2 group-hover:top-1/2 group-hover:opacity-100">
                            <div className="py-4 text-xs px-7">
                                <div className="text-xl font-bold"> My Tinerary Mobile</div>
                                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Developer:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <a href="https://store.steampowered.com/developer/DigitalExtremes?snr=1_4_600__629"> Roberto Perez</a>												</span>
                                </div>
                                <div className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <span className="text-xs text-gray-400 uppercase whitespace-nowrap md:text-sm">Technology's:</span>
                                    <span className="relative z-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        <p>React Native,MongoDB,Express,CSS</p> 									</span>
                                </div>

                            </div>
                            <div className="absolute left-0 pt-1 pl-7">
                                <button href="/" className="block px-4 text-base text-green-300 duration-700 border-2 rounded-sm border-opacity-20 bg-gradient-to-b from-green-400 to-green-800">
                                    Travel here
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    
                </div>
                
            </div>
        </>
    )
} export default Mobile;


