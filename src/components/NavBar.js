import { Link as LinkRouter } from "react-router-dom";

const navigation = [{
   name:"Projects" , to:"Projects" , current:false
   
}]



function NavBar() {
 return (
    <div className="absolute z-10 flex flex-row justify-between h-12 mt-4 ml-4 w-80">
      {navigation.map((item) => (
      <LinkRouter to={item.to} key={item.name} as="a" className="z-10 px-10 py-2 mr-4 font-normal text-white border border-white font-text hover:bg-white hover:text-black hover:border-transparent rounded-3xl"
      aria-current={item.current ? "page" : undefined}>
    {item.name}
    </LinkRouter>
   ))}


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