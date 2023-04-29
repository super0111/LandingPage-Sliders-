import { Box, Grid, Typography } from "@mui/material"

import CarouselArray from '../carousel/CarouselArray'

const featuredApartments = [
  { 
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
]

export const FeaturedApartments = () => {
  return (
    <Box mb={32} py={20} px={{ sm: 8, xs: 4 }} className='featuredApartments' sx={{
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

      <CarouselArray data={featuredApartments} title="villa" />  

    </Box>
  )
}