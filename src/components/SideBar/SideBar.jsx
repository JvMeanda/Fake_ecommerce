import { useContext } from "react"
import { Link } from "react-router-dom"
import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"
import { SideBarContext } from "./SideBarContext"
import { CartContext } from "../Cart/CartContext"
import CartItem from "../Cart/CartItem"

export const SideBar = () => {

  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full 
    bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] 
    xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Carrinho de Compras ({itemAmount})
        </div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex 
        justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 max-h-[calc(100vh-260px)]
       overflow-y-auto overflow-x-hidden lg:max-h-[calc(100vh-260px)]
       border-b">
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between
        items-center">
          <div className="uppercase font-semibold">
            <span>Total:</span> R$ {parseFloat(total).toFixed(2)}
          </div>
          <button onClick={() => clearCart()} className="cursor-pointer py-4 bg-red-500 
            text-white w-12 h-12 flex justify-center items-center 
            text-xl">
            <FiTrash2 />
          </button>
        </div>
        <Link to="/" className="bg-primary text-white flex p-4 
        justify-center items-center w-full font-medium">
          Checkout
        </Link>
      </div>
    </div>
  )
}
