import { useContext, useEffect, useState } from "react"
import { BsCart3 } from "react-icons/bs"
import { SideBarContext } from "./SideBar/SideBarContext"
import { CartContext } from "./Cart/CartContext"
import { Link } from "react-router-dom"
import logo from "../components/img/logo.svg"

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    
      <header
        className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
          } fixed w-full z-10 transition-all`}
      >
        <div className="container mx-auto flex items-center 
        justify-between h-full">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" className="w-[40px]" />
            <h1 className="font-logoFont text-[36px] tracking-wider pl-3">
              Clothes.com
            </h1>
          </Link>
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
            <BsCart3 className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
    
  );
};

export default Header;
