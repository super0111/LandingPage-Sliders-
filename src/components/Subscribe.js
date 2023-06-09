
import { Box, Button, Typography, OutlinedInput, Grid } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { palette } from "@/themes";

export const Subscribe = () => {
  return (
    <Grid container spacing={0} mb={{ sm: 24, xs: 12 }}>
      <Grid item md={6} sm={12} gap={2} mb={{ md: 0, xs: 4 }}>
        <Box 
          display={'flex'} 
          flexDirection={'column'} 
          alignItems={{ md: 'start', xs: 'center' }}
        >
          <Typography variant="h2" sx={{
            fontSize: { sm: 36, xs: 28 },
          }}>Stay Blingy!</Typography>
          <Typography variant="h3" mt={2} sx={{
            color: '#a7a1a1',
            textAlign: 'center',
          }}>
            Subscribe to our news letter and get latest market prices
          </Typography>
        </Box>
      </Grid>
      <Grid item md={6} xs={12} display={'flex'} justifyContent={'end'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={{ md: '70%', xs: '100%' }} sx={{
          background: 'white',  
          padding: '2px',
          height: '56px',
        }}>
          <OutlinedInput
            placeholder='E-mail Address'
            sx={{
              '& fieldset': { border: 'none' },
              '& input': { padding: '12px 14px' },
              fontSize: 16,
              width: '100%',
            }}
          />
          <Button variant="contained" sx={{
            background: palette.common.black,
            padding: '16.5px 28px'
          }}>
            <ArrowForwardIosIcon sx={{
              color: palette.common.white,
              fontSize: 18,
            }} />
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
