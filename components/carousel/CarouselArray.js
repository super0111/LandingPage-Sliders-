import React ,{useState} from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";

import Carousel from "./Carousel";
import { palette } from "@/themes";

const header_data =[
  {
    img:'/images/Header.png',
  },
  {
    img:'/images/Header.png',
  },
  {
    img:'/images/Header.png',
  }
]

const CarouselArray = ({data, title}) => {
    const [imgIndex,setImgIndex] = useState(0)

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
            breakpoint: 1550,
            settings: {
                className: 'center',
                centerMode: true,
                slidesToShow: 1,
                slidesToShow: 1,
                centerPadding: '385px',
            }
          },
          {
              breakpoint: 1440,
              settings: {
                slidesToShow: 1,
                centerPadding: '405px',
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
                centerPadding: '245px',
              }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: '145px',
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

    const className = "w-full object-cover";
    const slideClass = "relative";

    return ( 
      <div className="slider">
        <Slider {...feSettings}>
          {data.map((item, idx) => (
            <div key={idx} className={idx === imgIndex ? slideClass : "dslide"}>   
                <Box className={className}>
                  <Carousel data={item.items} title="arrayCarousel" />
                </Box>
                <Box sx={{
                  position: 'absolute',
                  top: { sm: '25px', xs: '16px'},
                  left: { sm: '30px', xs: '18px' },
                }}>
                  <Button sx={{
                    background: `${palette.common.white} !important`,
                    color: `${palette.common.black} !important`,
                    padding: '4px 16px',
                    fontSize: 14,
                    fontWeight: 500,
                  }}>Featured</Button>
                </Box>
                <Box mt={2}>
                  <Typography variant='h4'>{item.title}</Typography>
                  <Typography variant='h6' my={2}>{item.details}</Typography>
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography variant='h4'>AED</Typography>  
                    <Typography variant='h6' ml={2}>{item.AED}</Typography>
                  </Box>
                </Box>
            </div>
          ))}
        </Slider>
      </div>
     );
}
 
export default CarouselArray;