import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
  { text: 'Request Call Back', icon: <PhoneIcon /> },
]

export default function Footer() {
  return (
    <Box>
      <Box py={16} px={{ sm: 8, xs: 4 }} sx={{
        maxWidth: '1400px',
        margin: 'auto',
      }}>
        <Subscribe />
        <Grid container spacing={2} mt={{ sm: 12, xs: 0 }}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h3" sx={{
              fontSize: 24,
            }}>DELATTIO</Typography>  
            <Typography variant="h4" mt={4} sx={{
              color: '#8f8f8f',
              maxWidth: '52%',
            }}>
              DELATTIO is a registered trademark. DELATTIO.AE is operated bu LXP Real Estate Brokers LLC as a platform for the publication of real estate properties from DELATTIO Real Estate LLC (ORN 12521)
            </Typography>
            <Box display={'flex'} alignItems={'center'} gap={1} mt={4}>
              <FacebookIcon sx={{ fontSize: 35, color: '#8f8f8f' }} />
              <LinkedInIcon sx={{ fontSize: 35, color: '#8f8f8f' }} />
            </Box>
          </Grid>
          <Grid item sm={3} xs={12} my={{ sm: 0, xs: 8 }}>
            <Typography variant="h3" mb={4} sx={{
              fontSize: 20,
            }}>LIFESTYLES</Typography>
            <Box display={'flex'} flexDirection={'column'}>
              {
                lifestyles.map((item, i) => (
                  <Typography key={i} variant="h3" my={1} sx={{
                    fontSize: 18,
                    color: '#e8e8e8',
                  }}>{item.text}</Typography>
                ))
              }
            </Box>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant="h3" mb={4} sx={{
                fontSize: 20,
              }}>ADDRESS</Typography>
              <Typography variant="h3" sx={{
                fontSize: 16,
                color: '#e8e8e8',
              }}>A108 Adam Street New York, NY 535022 United States</Typography>
              <Typography variant="h3" mt={{ sm: 4, xs: 8 }} mb={4} sx={{
                fontSize: 20,
              }}>PHONE:</Typography>
              {
                phones.map((item, i) => (
                  <Box key={i} display={'flex'} alignItems={'center'} gap={2} my={1}>
                    <PhoneIcon sx={{ fontSize: 18 }} />
                    <Typography variant="h3" sx={{
                      fontSize: 16,
                      color: '#e8e8e8',
                      textDecoration: i === 2 ? 'underline' : '',
                    }}>{item.text}</Typography>
                  </Box>
                ))
              }
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box py={8} sx={{
        background: '#0e0e0e',
      }}>
        <Box px={{ sm: 8, xs: 4 }} sx={{
          maxWidth: '1400px',
          margin: 'auto',
        }}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h4" sx={{
              color: '#8f8f8f',
            }}>
              Delattio Properties 2022. All rights reserved.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} display={'flex'} justifyContent={{ sm: 'end', xs: 'start' }}>
            <Box display={'flex'} alignItems={'center'} gap={8}>
              <Typography variant="h4" sx={{
                color: '#8f8f8f',
              }}>Home</Typography >
              <Typography variant="h4" sx={{
                color: '#8f8f8f',
              }}>Terms of Service</Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </Box>
  )
}