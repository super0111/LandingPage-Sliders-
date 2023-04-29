import React,{useRef,useState} from "react";
import Slider from "react-slick";
const SimilarCarousel = ({data}) => {
    const [current, setCurrent] = useState(0);
    const slider = useRef()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        dotsClass: "similar__bar slick-dots",
        responsive:[
            {
                breakpoint: 1920,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                 slidesToShow: 2,
                }
            },
            {
                breakpoint:768,
                settings: {
                 slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                 slidesToShow: 1,
                }
            }
        ],
        beforeChange:(prevIndex, newIndex)=>{
            setCurrent(newIndex)
        },
       
      };
    return ( 
        <div className="block">
            <Slider {...settings} ref={slider}>
                {
                    data.map((item,index)=>(
                        <div className="px-7 relative" key={index}>
                            <img 
                                alt="property" 
                                src={"/images/product/02.avif"} 
                             />
                             <div className="absolute bottom-7 right-10 flex flex-col">
                                <span className="font-sans font-medium text-white text-lg uppercase">
                                    Downtown Dubai Penthouse
                                </span>
                                <span className="font-sans font-medium text-white text-sm text-opacity-70 leading-[10px] uppercase">
                                    Downtown Dubai Penthouse
                                </span>
                             </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
     );
}
 
export default SimilarCarousel;