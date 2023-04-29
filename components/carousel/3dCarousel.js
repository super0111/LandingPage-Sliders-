import React ,{useState} from "react";
import Slider from "react-slick";
const DCarousel = ({data, title}) => {
    const [imgIndex,setImgIndex] = useState(0)
    const settings = {
        dots:true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        className:"center",
        dotsClass: "button__bar slick-dots",
        beforeChange: (current, next) => setImgIndex(next), 
        arrows:false,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                 slidesToShow: 1,
                }
            }
        ]
      };
    const feSettings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '485px',
        slidesToShow: 1,
        speed: 300,
        dotsClass: "slick-dots",
        beforeChange: (current, next) => setImgIndex(next), 
        arrows:false,
        responsive:[
            {
                breakpoint: 1920,
                settings: {
                    className: 'center',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToShow: 1,
                    centerPadding: '485px',
                }
            },
            {
                breakpoint: 1440,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '325px',
                }
            },
            {
                breakpoint: 1366,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '295px',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '285px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '0',
                }
            },
            {
                breakpoint: 600,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '0',
                }
            }
        ]
      };
      const className=title==="journal"?"h-[200px] xl:h-[296px] w-full object-cover":"w-full object-cover";
      const slideClass =title==="journal"?"dslide relative activeSlide":"relative"
    return ( 
       <div className="slider">
         <Slider {...title==="journal"?settings:feSettings}>
            {data.map((item, idx) => (
                <div key={idx} className={idx === imgIndex ? slideClass : "dslide"}>   
                    <img 
                        src={item.img}
                        alt={idx}
                        className={className}
                    />
                    {title==="villa" && <div className="absolute bottom-[26px] left-[26px] right-[26px] flex items-center justify-between">
                        <button className="flex items-center gap-2">
                                <span className="text-[19px] text-white font-normal leading-[19px]">
                                    Jumeirah
                                </span>
                                <img alt="arrow" src="/images/angle-right.svg" className="h-2.5" />
                        </button>
                        <span className="text-[19px] text-white font-normal leading-[19px]">
                             10,00,000 AED
                        </span>
                    </div>}
                </div>
            ))}
        </Slider>
       </div>
     );
}
 
export default DCarousel;