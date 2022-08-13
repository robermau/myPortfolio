import programer from "../assets/programer.png"

function AboutMe() {

    return (

        <> 
        <div className="flex flex-row items-center bg-black ">
            <div  className="text-white " >
            
                <h1 className="text-4xl font-bold text-center underline uppercase">Who I 'am ?</h1>

                
                <p className="pt-5 pl-10 text-2xl font-bold  align-super">
                    ⚪I am a responsible and hard-working person with a
                    broad understanding of teamwork. I have a lot of
                    potential and I would really like to continue training.
                </p>
   
                <h1 className="pt-10 pl-10 mb-20 text-3xl font-bold text-center uppercase">My strengths</h1>
               <div className="flex flex-row justify-center items-center ">
               
                <ul className=" mb-5  flex flex-col justify-center items-center mr-20  ">

                    <li className="mt-5 font-bold">
                        Skilled ✅
                    </li>
                    <li className="mt-5 font-bold">

                         Solidary ✅
                    </li>
                    <li className="mt-5 font-bold">

                        Co-worker ✅
                    </li>
                    <li className="mt-5 font-bold">

                        Responsible ✅
                    </li>
                    <li className="mt-5 font-bold ">
                        Efficient ✅

                    </li>
                    
                </ul>
                <img className=" pr-5 rounded-full h-80  mr-20" src={programer}/>
                </div>
             
               
                </div>
              
            </div>
        </>
    )
}

export default AboutMe;