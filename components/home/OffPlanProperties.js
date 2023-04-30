import { Box, Typography } from "@mui/material"
import image1 from '../../assets/images/Layer1.png'
import image2 from '../../assets/images/Layer2.png'
import image3 from '../../assets/images/Layer3.png'
import image4 from '../../assets/images/Layer4.png'
import image5 from '../../assets/images/Layer5.png'

const propertyItems = [
  { url: image1, text: 'DOWNtown Dubai Penthouse' },
  { url: image2, text: 'DOWNtown Dubai Penthouse' },
  { url: image3, text: 'DOWNtown Dubai Penthouse' },
  { url: image4, text: 'DOWNtown Dubai Penthouse' },
  { url: image5, text: 'DOWNtown Dubai Penthouse' },
]

export const OffPlanProperties = () => {
  return (
    <Box py={10} px={4} className='offPlan'>
      <Typography variant="h2" mb={8} sx={{
        textAlign: { sm: 'center', xs: 'left' },
        fontSize: { sm: 42, xs: 32 },
      }}>
        Offplan Projects
      </Typography>
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
              width: { xs:"96.8%", sm: '205px' },
              flex: 'none',
              opacity: { sm: 0.3, xs: 0.8 },
              transition: 'width 0.5s',
              '&: hover': {
                opacity: 1,
                width: { xs:"96.8%", sm: '235px' },
              }
            }}>
              <Box component={'img'} mx={1} src={item.url.src} alt="" sx={{
                height: '450px',
                width: '100%',
                marginTop: { sm: i === 0 ? 0 : i === 1? '40px' : i === 2 ? '20px' : i === 3 ? '40px' : 0, xs: 0 },
              }} />
              <Typography variant="h4" sx={{
                maxWidth: '80%',
                position: 'absolute',
                left: '9%',
                top: { xs: 'initial', sm: '45%'},
                bottom: { xs: '20px', sm: 'initial'},
                textAlign: { sm: 'center', xs: 'left' },
              }}>
                {item.text}
              </Typography>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}