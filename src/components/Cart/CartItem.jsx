import { Link } from "react-router-dom"
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartItem = ({ item }) => {

  const { id, title, image, price, amount } = item;

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 
    w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">

        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">

          <div className="flex justify-between mb-2">
            <Link className="text-sm uppercase 
            hover:underline font-medium max-w-[240px] text-primary"
              to={`/product/${id}`}>
              {title}
            </Link>

            <button onClick={() => removeFromCart(id)} className="text-xl 
            cursor-pointer">
              <IoMdClose className="text-gray-500 transition
               hover:text-red-500 mb-2" />
            </button>

          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">

            <div className="flex flex-1 max-w-[100px]
             items-center h-full border text-primary font-medium">
              <button onClick={() => decreaseAmount(id)} className="flex 
              flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdRemove />
              </button>
              <div className="h-full flex justify-center items-center 
              px-2 border-x-[1px]">
                {amount}
              </div>
              <button onClick={() => increaseAmount(id)} className="flex 
              flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdAdd />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-around">
              R$ {price}
            </div>
            <div className="flex flex-1 justify-center items-center
             text-primary font-medium">
              {`R$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem