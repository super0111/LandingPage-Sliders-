
import { Box, Button, Typography, OutlinedInput, Grid } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { palette } from "@/themes";

export const Subscribe = () => {
  return (
    <Grid container spacing={4}>
      <Grid item sm={6} xs={12} gap={2}>
        <Box>
          <Typography sx={{

          }}>
            Stay Blingy!
          </Typography>
          <Typography sx={{

          }}>
            Subscribe to our news letter and get latest market prices
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} display={'flex'} justifyContent={'end'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'70%'} sx={{
          background: 'white',
          padding: '2px',
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
