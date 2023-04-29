import { Box } from '@mui/material'
import { palette } from '@/themes'
import {
  Header,
  FeaturedApartments,
  PopularAreas,
  DowntownDubai,
  // OffPlanProperties,
} from '../../components/home'

export default function HomePage () {
  return (
    <Box sx={{
      background: palette.common.black,
    }}>
      <Header />
      <FeaturedApartments />
      <PopularAreas />
      <DowntownDubai />
      {/* <OffPlanProperties /> */}
    </Box>
  )
}