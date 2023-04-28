import { useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { palette } from "@/themes"
import { Box, Button, Grid, Typography } from "@mui/material"

import image1 from '../../assets/images/Header.png'
import image2 from '../../assets/images/Layer 57.png'

const responsive = {
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

const imageItems = [
  { url: image1, concept: 651, number: '01' },
  { url: image2, concept: 216, number: 'PENTHOUSE' },
  { url: image1, concept: 651, number: 'PENTHOUSE' },
  { url: image1, concept: 621, number: 'PENTHOUSE' },
  { url: image2, concept: 651, number: 'PENTHOUSE' },
]

const items = [
  { title: 'SQ.FT', text: '13,000 SQ.FT' },
  { title: 'PRICE', text: '144,220 AED' },
  { title: 'BATHROOMS', text: '4 ROOMS' },
  { title: 'BEDROOMS', text: '8 ROOMS' },
]

export const DowntownDubai = () => {
  const mainCarousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterCarouselChg = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <Box 
      display={'flex'} 
      justifyContent={'space-between'} 
      alignItems={'center'}
      className='downtown'
      mt={16} px={{ sm: 8, xs: 4 }} 
      sx={{
        backgroundImage: `url(/assets/Header.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: { md: '720px', xs: '600px'},
        position: 'relative',
      }}
    >
      <Box width={'100%'} mt={8} sx={{
        maxWidth: '1400px',
        margin: 'auto',
      }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} mt={{ md: 38, xs: 12 }}>
            <Typography variant="h3" mb={4}>Modern Architecture</Typography>
            <Typography variant="h1" mb={8} sx={{
              maxWidth: { md: '90%', xs: '100%' },
              fontSize: { sm: 42, xs: 36 },
            }}>
              DOWNTOWN DUBAI VILLA
            </Typography>
            <Button sx={{
              background: `${palette.common.white} !important`,
              color: palette.common.black,
              fontSize: 14,
              borderRadius: '999px !important',
              padding: '14px 32px',
            }}>
              VIEW DETAILS
            </Button>
            <Grid container spacing={2} p={8} mt={{ sm: 28, xs: 12 }} width={{ sm: '80%', xs: '100%' }} sx={{
              background: '#312f2f',
              opacity: 0.7,
            }}>
              {
                items.map((item, i) => (
                  <Grid item sm={3} xs={6} key={i}>
                    <Typography variant="h4" mb={2}>{item.title}</Typography>
                    <Typography variant="h6" sx={{
                      fontWeight: 600,
                    }}>{item.text}</Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} display={{ md: 'flex', sm: 'none' }} justifyContent={'end'}>
            <Box sx={{
              width: { lg: '640px', md: '400px' },
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
              <Carousel 
                responsive={responsive}
                arrows={true}
                infinite={true}
                ref={(el) => (mainCarousel.current = el)}
                afterChange={handleAfterCarouselChg}
              >
                {
                  imageItems.map((item, i) => (
                    <Box key={i} mx={2}
                      sx={{
                        position: 'relative',
                        height: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? '250px' : '210px', xs: '210px'},
                        opacity: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? 1 : 0.8, xs: 1 },
                        width: '100%',
                      }}
                    >
                      <Box component={'img'} src={item.url.src} alt='' sx={{
                        width: '100%',
                        height: '100%',
                        marginTop: { lg: currentSlide + 1 === i || currentSlide - 3 === i ? '0px' : '40px', xs: '0' },
                      }} />
                      <Typography variant='h4' sx={{
                        position: 'absolute',
                        display: { lg: 'block', xs: 'none' },
                        bottom: currentSlide + 1 === i || currentSlide - 3 === i ? '15px' : '-24px',
                        left: '60px',
                        fontWeight: 700,
                      }}>Concept . {item.concept}</Typography>
                      <Typography variant='h4' sx={{
                        display: { lg: 'block', xs: 'none' },
                        position: 'absolute',
                        top: currentSlide + 1 === i || currentSlide - 3 === i ? '20px' : '70px',
                        left: '30px',
                        fontWeight: 700,
                      }}>0{i+1}</Typography>
                    </Box>
                  ))
                }
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}