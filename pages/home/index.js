import { Box } from '@mui/material'
import { palette } from '@/themes'
import {
  Header,
  FeaturedApartments,
  PopularAreas,
  DowntownDubai,
  OffPlanProperties,
} from '../../components/home'
import Footer from '@/components/footer/Footer'
import { Subscribe } from '@/components/Subscribe'

export default function HomePage () {
  return (
    <Box sx={{
      background: palette.common.black,
    }}>
      <Header />
      <FeaturedApartments />
      <PopularAreas />
      <DowntownDubai />
      <OffPlanProperties />
      <Subscribe />
      <Footer />
    </Box>
  )
}