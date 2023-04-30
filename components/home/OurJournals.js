import { Box, Typography } from "@mui/material"
import image1 from '../../assets/images/Layer1.png'
import image2 from '../../assets/images/Layer2.png'
import image3 from '../../assets/images/Layer3.png'
import image4 from '../../assets/images/Layer4.png'
import image5 from '../../assets/images/Layer5.png'

const propertyItems = [
  { url: image1,
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { url: image2,
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { url: image3,
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { url: image4,
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { url: image5,
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
]

export const OurJournals = () => {
  return (
    <Box py={8} px={0}>
      <Box mt={8} display={'flex'} justifyContent={'space-between'} sx={{
        width: { xs: '100%', sm: '620px', lg: '1100px'},
        margin: 'auto',
        overflowX: 'auto',
      }}>
        {
          propertyItems.map((item, i) => (
            <Box key={i} sx={{
              position: 'relative',
              margin: { xs: '0 5px', sm: 0 },
              width: '100%',
              flex: 'none',

            }}>
              <Box component={'img'} mx={1} src={item.url.src} alt="" sx={{
                height: '340px',
                width: '96%',
                '&: hover': {
                  opacity: 1,
                },
                opacity: { sm: 0.3, xs: 0.8 },
                transition: 'width 0.5s',
                marginTop: { sm: i === 0 ? 0 : i === 1? '40px' : i === 2 ? '20px' : i === 3 ? '40px' : 0, xs: 0 },
              }} />
              <Box mt={6} mx={2}>
                <Typography variant='h4'>{item.title}</Typography>
                <Typography variant='h6' my={2} sx={{ color: '#9c9c9c' }}>{item.details}</Typography>
                <Typography variant='h4' sx={{ color: '#9c9c9c' }}>{item.portfolio}</Typography>  
                <Typography variant='h6' sx={{ color: '#9c9c9c' }}>{item.date}</Typography>
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}