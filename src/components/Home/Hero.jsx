import ManImg from "../img/man_hero.png"
import WomanImg from "../img/woman_hero.png"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {

  const bannerSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  
  return (
    <Slider {...bannerSliderSettings}>
      <section className="bg-femaleBanner h-[760px] shadow-lg py-24 
      xl:h-[800px]">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
              Novas Tendências
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              Descubra a Moda Feminina <br />
              <span className="font-semibold">Perfeita para Você</span>
            </h1>
            <Link
              to="/"
              className="self-start uppercase font-semibold border-b-2
               border-primary"
            >
              Descubra Mais
            </Link>
          </div>
          <div className="hidden lg:block drop-shadow-xl">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-maleBanner h-[760px] shadow-lg py-24 
      xl:h-[800px]">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] bg-blue-500 mr-3"></div>
              Novas Tendências
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              Descubra a Moda Masculina <br />
              <span className="font-semibold">Perfeita para Você</span>
            </h1>
            <Link
              to="/"
              className="self-start uppercase font-semibold border-b-2
               border-primary"
            >
              Descubra Mais
            </Link>
          </div>
          <div className="hidden lg:block drop-shadow-xl">
          <img src={ManImg} alt="" className="object-cover w-full h-[884px]" />
          </div>
        </div>
      </section>
    </Slider>
  );
};

export default Hero;