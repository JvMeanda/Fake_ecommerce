import { useContext } from "react"
import { Link } from "react-router-dom"
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { CartContext } from '../Cart/CartContext'

const Product = ({ product }) => {

  const { id, image, category, title, price } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#E4E4E4] h-[300px] mb-4 relative 
      overflow-hidden group transition shadow-md">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center 
          items-center">
            <img className="max-h-[160px] group-hover:scale-110 transition 
            duration-300" src={image} alt="" />
          </div>
          <div className="absolute top-5 right-0 bg-red-500 shadow-sm 
          border-2 border-[#E4E4E4] flex flex-col items-center justify-center 
          opacity-0 group-hover:right-5 group-hover:opacity-100 
          transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white 
              w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link to={`/product/${id}`} className="w-12 h-12 bg-white 
            flex justify-center items-center text-primary drop-shadow-xl">
              <BsEyeFill className="text-[18px]" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 hover:underline">{title}</h2>
        </Link>
        <div className="font-semibold">R$ {price}</div>
      </div>
    </div>
  )
}

export default Product
