import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "../Product/ProductContext"
import Product from "../Product/Product"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const { products, error } = useContext(ProductContext);

  const filteredProductsMen = products.filter(item => {
    return item.category === "men's clothing";
  });

  const filteredProductsWomen = products.filter(item => {
    return item.category === "women's clothing";
  });

  const productsSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

    if (error) {
        return <div className="flex items-center justify-center
        py-24 font-semibold md:text-[22px] text-[18px]">
          {error}
          </div>;
    }

  return (
    <div>
      
      <section className="py-16">
        <div className="container mx-auto">
          <Link to={"/"} className="inline-block">
            <h2 className="font-semibold text-2xl mb-4 text-center 
          md:text-left hover:underline">
              Moda masculina
            </h2>
          </Link>
          <Slider {...productsSliderSettings}>
            {filteredProductsMen.map(product => (
              <Product product={product} key={product.id} />
            ))}
          </Slider>
          <Link to={"/"} className="inline-block">
            <h2 className="font-semibold text-2xl mb-4 mt-10 text-center
           md:text-left hover:underline">
              Moda feminina
            </h2>
          </Link>
          <Slider {...productsSliderSettings}>
            {filteredProductsWomen.map(product => {
              return <Product product={product} key={product.id} />;
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Home
