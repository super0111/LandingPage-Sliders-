import React ,{useState} from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

const DCarousel = ({data, title, setSelectedBg}) => {
    const [imgIndex, setImgIndex] = useState(0)

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

    const popularSettings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '485px',
        slidesToShow: 1,
        speed: 300,
        dotsClass: "slick-dots",
        beforeChange: (current, next) => setImgIndex(next), 
        arrows:true,
        responsive:[
            {
                breakpoint: 1920,
                settings: {
                    className: 'center',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToShow: 1,
                    centerPadding: '355px',
                }
            },
            {
                breakpoint: 1540,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '300px',
                }
            },
            {
                breakpoint: 1440,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '300px',
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
                 centerPadding: '200px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '150px',
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

    const downtownSettings = {
        className: 'bottom',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 1,
        beforeChange: (current, next) => {
            setSelectedBg(next)
            setImgIndex(next)
        }, 
        arrows:true,
        responsive:[
            {
                breakpoint: 1920,
                settings: {
                    className: 'center',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToShow: 1,
                    centerPadding: '125px',
                }
            },
            {
                breakpoint: 1540,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '180px',
                }
            },
            {
                breakpoint: 1440,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '180px',
                }
            },
            {
                breakpoint: 1366,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '185px',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '180px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '120px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                 slidesToShow: 1,
                 centerPadding: '120px',
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
    const slideClass =title==="journal"?"dslide relative activeSlide":"relative";

    return ( 
       <div className="slider">
         <Slider {...title==="journal"?settings:title==='popular'?popularSettings:title==='downtown'?downtownSettings:feSettings}>
            {data.map((item, idx) => (
                <div key={idx} className={idx === imgIndex ? slideClass : "dslide"}>   
                    <img 
                        src={item.img}
                        alt={idx}
                        className={className}
                        style={{
                            height: title==='downtown'?'245px': title='offPlan' ? '450px' :'initial',
                            opacity: title='offPlan' ? 0.7 :'initial',
                            marginTop: title==='downtown' && idx === imgIndex ?'-38px':'initial',
                        }}
                    />
                    {title === "villa" && 
                        <div className="absolute bottom-[26px] left-[26px] right-[26px] flex items-center justify-between">
                            <button className="flex items-center gap-2">
                                <span className="text-[19px] text-white font-normal leading-[19px]">
                                    Jumeirah
                                </span>
                                <img alt="arrow" src="/images/angle-right.svg" className="h-2.5" />
                            </button>
                            <span className="text-[19px] text-white font-normal leading-[19px]">
                                10,00,000 AED
                            </span>
                        </div>
                    }
                    {title === 'popular' && 
                        <Box sx={{
                            position: 'absolute',
                            bottom: '15px',
                            left: '30px',
                        }}>
                            <Typography variant='h4'>{item.text1}</Typography>
                            <Typography variant='h4'>{item.text2}</Typography>
                        </Box> 
                    }
                    {title === 'downtown' &&
                        <Box>
                            <Typography variant='h4' sx={{
                                position: 'absolute',
                                display: { lg: 'block', xs: 'none' },
                                bottom: '15px',
                                left: '15px',
                                fontWeight: 700,
                            }}>Concept . {item.concept}</Typography>
                            <Typography variant='h4' sx={{
                                display: { lg: 'block', xs: 'none' },
                                position: 'absolute',
                                top: '20px',
                                left: '30px',
                                fontWeight: 700,
                                zIndex: 100
                            }}>0{idx+1}</Typography>
                        </Box>
                    }
                    {title = 'offPlan' &&
                        <Typography variant="h4" sx={{
                            maxWidth: '80%',
                            position: 'absolute',
                            left: '9%',
                            bottom: { xs: '45px', sm: 'initial'},
                            textAlign: { sm: 'center', xs: 'left' },
                        }}>
                            {item.text}
                        </Typography>
                    }
                    {title = 'ourJournal' &&
                        <Box mt={6} mx={2}>
                            <Typography variant='h4' sx={{
                                fontFamily: 'Cormorant Garamond',
                                fontSize: 20,
                                fontWeight: 500,
                            }}>{item.title}</Typography>
                            <Typography variant='h6' my={2} sx={{ 
                                color: '#bcbbbb', 
                                fontFamily: 'Cormorant Garamond',
                                fontSize: 20,
                                lineHeight: 1.3,
                            }}>{item.details}</Typography>
                            <Typography variant='h4' mt={4} sx={{ color: '#bcbbbb' }}>{item.portfolio}</Typography>  
                            <Typography variant='h6' sx={{ color: '#bcbbbb' }}>{item.date}</Typography>
                        </Box>
                    }
                </div>
            ))}
        </Slider>
       </div>
     );
}
 
export default DCarousel;