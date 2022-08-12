

function NavBar() {
 return (
    <div className="absolute w-80 h-12 mt-4 ml-4 z-10 flex flex-row justify-between">
    <button class=" mr-4 font-text hover:bg-white text-white font-normal hover:text-black  py-2 px-10 border border-white hover:border-transparent rounded-3xl">
       Project
    </button>
    <button class=" mr-4 font-text hover:bg-white text-white font-normal hover:text-black  py-2 px-10 border border-white hover:border-transparent rounded-3xl">
       Technology's
    </button>
    <button class=" mr-4 font-text hover:bg-white text-white font-normal hover:text-black py-2 px-10 border border-white hover:border-transparent rounded-3xl">
       Contact
    </button>
 </div>
 )
}
export default NavBar;