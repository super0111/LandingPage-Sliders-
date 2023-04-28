import { useRef, useState } from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import image1 from '../../assets/images/Layer 654.png'
import image2 from '../../assets/images/Layer 661.png'

const imageItems = [
  { url: image1, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image2, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image2, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image2, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image1, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const PopularAreas = () => {
  const mainCarousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterCarouselChg = (nextSlide) => {
    console.log('nextSlide', nextSlide)
    setCurrentSlide(nextSlide);
  };

  return (
    <Box my={12} className='popularAreas' sx={{
      maxWidth: '1400px',
      margin: 'auto',
    }}>
      <Grid container spacing={4} width={'100%'}>
        <Grid item md={4} sm={4} xs={12} display={'flex'} alignItems={'center'} pr={4}>
          <Box display={'flex'} flexDirection={'column'} gap={4} mt={8} width={{ md: '80%', xs: '100%'}}>
            <Typography variant='h2'>Popular Areas</Typography>
            <Typography variant='h6'>As well as being positioned on one of the exclusive Fronds of Palm Jumeirah.</Typography>
            <Typography variant='h6'>It now features the architectural talents of Chakib Richani, att from the Tabari Gallery and a host of unique touches including Flos lighting and furniture from Minotti, Poltrona Frau, Bocci and Giorgetti.</Typography>
          </Box>
        </Grid>
        <Grid item md={8} sm={8} xs={12} pr={4}>
          <Carousel 
            responsive={responsive}
            arrows={true}
            infinite={true}
            itemClass="carousel-item-padding-20-px"
            ref={(el) => (mainCarousel.current = el)}
            afterChange={handleAfterCarouselChg}
          >
            {
              imageItems.map((item, i) => (
                <Box key={i} mx={2} 
                  sx={{
                    position: 'relative',
                    height: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? '500px' : '450px', sm: '450px' },
                    width: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? '110%' : '83%', xs: '100%' },
                    marginTop: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? '0px' : '25px', xs: '0px'},
                    marginLeft: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? '-40px !important' : '0px', xs: '0px'},
                  }}
                >
                  <Box component={'img'} src={item.url.src} alt='' sx={{
                    width: '100%',
                    height: '100%',
                    margin: { md: '0 10px', xs: '0'},
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '30px',
                  }}>
                    <Typography variant='h4'>{item.text1}</Typography>
                    <Typography variant='h4'>{item.text2}</Typography>
                  </Box>
                </Box>
              ))
            }
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  )
}