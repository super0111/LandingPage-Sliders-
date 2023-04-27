import { Box, Button, Grid, Typography } from "@mui/material"

const contactInfos = [
  { name: 'Area', info: 'Seaside Hills' },
  { name: 'Location', info: 'Boulevard, MTC+X0' },
  { name: 'Location', info: 'Boulevard, MTC+X0' },
]

export const Header = () => {
  return (
    <Box sx={{

    }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Typography sx={{

          }}>
            Dubai dominates as top choice for UHNW primary residents
          </Typography>
          <Button>
            Learn More
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{
            background: 'white',
            borderRadius: '20px',
          }}>
            {
              contactInfos.map((item, i) => (
                <Box key={i} display={'flex'} alignItems={'center'} sx={{
                  borderBottom: '1px solid black',
                }}>
                  <Box component={'img'} src={''} alt='' sx={{

                  }} />
                  <Box display={'flex'} flexDirection={'column'} gap={4} sx={{

                  }}>
                    <Typography sx={{

                    }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{
                  
                    }}>
                      {item.info}
                    </Typography>
                  </Box>
                </Box>
              ))
            }
            <Box display={'flex'} justifyContent={'center'}>
              <Button>Show More</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}