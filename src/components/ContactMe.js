import React from 'react'
import { Link } from 'react-router-dom';


function ContactMe() {
  return (
    <>


     
      <div className='text-white min-h-screen   bg-black font-medium'>

        <Link className="flex-row items-center pt-20 flex" to='/'>
       
          <svg xmlns="http://www.w3.org/2000/svg" className=" z-10  h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          <h2 className="font-normal text-2xl">Back to Home</h2>
        </Link>


        <div className=' flex flex-col bg-slate-400 items-center '>


          <h1 className='text-white font-medium text-3xl'>Contact Me</h1>
          <form className=" w-full max-w-lg">
            <div className="flex  flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white font-medium  text-2xl mb-2" for="grid-password">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" />

              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white font-medium  text-2xl mb-2" for="grid-password">
                  E-mail
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />

              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white font-medium  text-2xl mb-2" for="grid-password">
                  Message
                </label>
                <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="z-10 px-10 mb-4 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl" type="button">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default ContactMe;