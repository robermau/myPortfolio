

function NavBar() {
 return (
    <div className="absolute z-10 flex flex-row justify-between h-12 mt-4 ml-4 w-80">
    <button className="z-10 px-10 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl">
      <a href="./Projects.js">Project</a> 
    </button>
    <button className="px-10 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl">
       Technology's
    </button>
    <button className="px-10 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl">
       Contact
    </button>
 </div>
 )
}
export default NavBar;