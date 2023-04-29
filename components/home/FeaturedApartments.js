import { useRef, useState } from 'react'
import { Box, Grid, Typography, Button } from "@mui/material"
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'

import image1 from '../../assets/images/Layer 57.png'
import image2 from '../../assets/images/Header.png'
import { palette } from '@/themes'

const featuredApartments = [
  { 
    items: [
      { url: image1 },
      { url: image2 },
      { url: image1 },
      { url: image1 },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { url: image2 },
      { url: image2 },
      { url: image1 },
      { url: image1 },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { url: image1 },
      { url: image2 },
      { url: image1 },
      { url: image1 },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { url: image1 },
      { url: image1 },
      { url: image2 },
      { url: image1 },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { url: image1 },
      { url: image1 },
      { url: image1 },
      { url: image1 },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
]

const responsive = {
  superLargeDesktop: {
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

const responsive2 = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
};

export const FeaturedApartments = () => {
  const mainCarousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterCarouselChg = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  const handleBeforeCarouselChg = (nextSlide) => {
    setCurrentSlide(nextSlide+2);
  };

  return (
    <Box mb={24} py={20} px={{ sm: 8, xs: 4 }} className='featuredApartments' sx={{
      maxWidth: '1400px',
      margin: 'auto',
    }}>
      <Grid container spacing={4} mb={12} width={'100%'}>
        <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
          <Typography variant='h2' sx={{
            maxWidth: '30%',
          }}>Featured Apartments</Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
          <Box display={'flex'} flexDirection={'column'} gap={4}>
            <Typography variant='body2'>Dilatations International realty is excited to present the listing for this bespoke 4-bedroom Garden Homes villa on Frond N, Plam Jumeirah,</Typography>
            <Typography variant='body2'>As well as being positioned on one of the exclusive Fronds of Plam Jumeirah, this exceptional Garden Homes villa has been expettly designed and fully customised to crete a dram luxury property.</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Carousel 
        responsive={responsive}
        arrows={false}
        infinite={true}
        itemClass="carousel-item-padding-20-px"
        ref={(el) => (mainCarousel.current = el)}
        afterChange={handleAfterCarouselChg}
        beforeChange={handleBeforeCarouselChg}
      >
        {
          featuredApartments.map((item, i) => (
            <Box key={i} mx={2} 
              sx={{
                position: 'relative',
                height: { sm: currentSlide + 1 === i || currentSlide - 3 === i ? '380px' : '300px', xs: '300px'},
                width: { sm: currentSlide + 1 === i || currentSlide - 3 === i ? '98%' : '92%', xs: '100%' },
                margin: { sm: currentSlide + 1 === i || currentSlide - 3 === i ? '0 -12px !important' : 0, xs: 0 },
                marginTop: { sm: currentSlide + 1 === i || currentSlide - 3 === i ? '0px' : '30px', xs: 0 },
              }}
            >
              <Box className='featuresApartments_item' sx={{
                width: '100%',
                height: '100%',
                margin: 0,
              }}>
                <Carousel 
                  responsive={responsive2}
                  arrows={true}
                  infinite={true}
                  slidesToSlide={1}
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                >
                  {
                    item.items.map((carouselItem, i) => (
                      <Box key={i} component={'img'} src={carouselItem.url.src} alt='' sx={{
                        width: '100%',
                        height: '100%',
                      }} />
                      ))
                    }
                </Carousel>
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
              <Box sx={{
                position: 'absolute',
                bottom: '-100px',
                left: '10px',
              }}>
                <Typography variant='h4'>{item.title}</Typography>
                <Typography variant='h6' my={2}>{item.details}</Typography>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography variant='h4'>AED</Typography>  
                  <Typography variant='h6' ml={2}>{item.AED}</Typography>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Carousel> */}
    </Box>
  )
}