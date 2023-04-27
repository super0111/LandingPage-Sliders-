import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';

import { Subscribe } from "./Subscribe";

const lifestyles = [
  { text: 'Beachfront' },
  { text: 'Downtown Living' },
  { text: 'Golf Estates' },
  { text: 'Luxury Penthouses' },
  { text: 'Residential Communities' },
  { text: 'Waterfront Properties' },
]

const phones = [
  { text: '+155 89554 8855', icon: <PhoneIcon /> },
  { text: '+0123 456 8910', icon: <PhoneIcon /> },
  { text: 'request Call Back', icon: <PhoneIcon /> },
]

export default function Footer() {
  return (
    <Box p={10} mt={8} sx={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <Subscribe />
      <Grid container spacing={2} mt={12}>
        <Grid item xs={6}>
          <Typography sx={{

          }}>DELATTIO</Typography>
          <Typography>
            DELATTIO is a registered trademark. DELATTIO.AE is operated bu LXP Real Estate Brokers LLC as a platform for the publication of real estate properties from DELATTIO Real Estate LLC (ORN 12521)
          </Typography>
          <Box display={'flex'} alignItems={'center'}>
            <FacebookIcon sx={{ borderRadius: '50%' }} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{

          }}>LIFESTYLES</Typography>
          <Box display={'flex'} flexDirection={'column'}>
            {
              lifestyles.map((item, i) => (
                <Typography key={i}>{item.text}</Typography>
              ))
            }
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography>ADDRESS</Typography>
            <Typography>A108 Adam Street New York, NY 535022 United States</Typography>
            <Typography>PHONE:</Typography>
            {
              phones.map((item, i) => (
                <Box key={i} display={'flex'} alignItems={'center'} gap={2}>
                  <PhoneIcon sx={{ fontSize: 18 }} />
                  <Typography>{item.text}</Typography>
                </Box>
              ))
            }
          </Box>
        </Grid>
      </Grid>

      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={8}>
        <Typography>
          Delattio Properties 2022. All rights reserved.
        </Typography>

        <Box display={'flex'} alignItems={'center'} gap={4}>
          <Typography>Home</Typography>
          <Typography>Terms of Service</Typography>
        </Box>
      </Box>

    </Box>
  )
}