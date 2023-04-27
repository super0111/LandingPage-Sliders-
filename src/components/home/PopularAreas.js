import { Box, Grid, Typography } from "@mui/material"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import image1 from '../../assets/images/lion.jpg'

const imageItems = [
  { url: image1, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image1, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image1, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
  { url: image1, text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' },
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
  return (
    <Box mt={12} sx={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <Grid container spacing={4}>
        <Grid item md={4} sm={4} sx={12}>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={4} width={'85%'}>
            <Typography>Popular Areas</Typography>
            <Typography>As well as being positioned on one of the exclusive Fronds of Palm Jumeirah.</Typography>
            <Typography>It now features the architectural talents of Chakib Richani, att from the Tabari Gallery and a host of unique touches including Flos lighting and furniture from Minotti, Poltrona Frau, Bocci and Giorgetti.</Typography>
          </Box>
        </Grid>
        <Grid item md={8} sm={8} sx={12}>
          <Carousel 
            responsive={responsive}
            arrows={true}
            infinite={true}
            itemclassName="big-carousel-item"
            itemClass="carousel-item-padding-20-px"
          >
            {
              imageItems.map((item, i) => (
                <Box key={i} mx={2} sx={{
                  position: 'relative',
                }}>
                  <Box component={'img'} src={item.url.src} alt='' sx={{
                    width: '100%',
                    margin: '0 10px',
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                  }}>
                    <Typography>{item.text1}</Typography>
                    <Typography>{item.text2}</Typography>
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