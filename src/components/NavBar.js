import { Link as LinkRouter } from "react-router-dom";


const navigation = [
   {name:"Projects" , to:"/projects" , current:false},
   { name: "Technology's", to:"/technologys" , current:false} ,
   { name: "Contacts", to:"/contacts" , current:false}
]

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

function NavBar() {
 return (
    <div className="absolute z-10 flex flex-row justify-between h-12 mt-4 ml-4 w-80">
      
    {navigation.map((item) => (
      <LinkRouter to={item.to} key={item.name}
          as="a"
          className={classNames(
              item.current
                  ? " absolute z-10 px-10 py-2 mr-4 font-normal text-white border border-white font-text"
                  : "  z-10 px-10 py-2 mr-4 font-normal text-white border border-white font-text  hover:bg-white hover:text-black hover:border-transparent",
              " font-medium   rounded-3xl ")}
          aria-current={item.current ? "page" : undefined}>
          {item.name}
      </LinkRouter>
      
  ))}
   
   </div>
 )
}
export default NavBar;