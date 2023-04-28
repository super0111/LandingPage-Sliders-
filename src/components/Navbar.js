import { useRouter } from "next/router"
import { Box, Button, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import { palette } from "@/themes";

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Buy', to: '/buy' },
  { name: 'Sell', to: '/sell' },
  { name: 'Rent', to: '/rent' },
  { name: 'Properties', to: '/properties' },
]

export default function Navbar() {
  const router = useRouter();
  const [ openMenu, setOpenMenu ] = useState(false)
  const matches = useMediaQuery('(min-width:810px)');

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={6} px={6} sx={{
          width: '100%',
          maxWidth: '1400px',
          margin: 'auto',
          position: 'absolute',
          zIndex: 1000,
        }}>
          <Typography variant="" sx={{
            fontSize: 28,
          }}>
            DELATTIO
          </Typography>
          <Box display={ matches ? 'flex' : 'none' } alignContent={'center'}>
            {
              navItems.map((item, i)=> (
                <Button variant="" key={i}
                  sx={{
                    background: 'none !important',
                    fontSize: 18,
                    fontStyle: 'normal',
                    textTransform: 'initial',
                    fontWeight: 400,
                  }}
                  onClick={()=> router.push(`/${item.to}`)}
                >{item.name}</Button>
              ))
            }
          </Box>
          <Box display={ matches ? 'flex' : 'none' } alignItems={'center'} gap={6}>
            <select style={{
              background: 'none',
              border: 'none',
              fontSize: 18,
            }}>
              <option>AED</option>
              <option>AED</option>
            </select>
            <Button sx={{
              padding: '14px 48px !important',
            }}>
              Sign In
            </Button>
          </Box>
          <Box display={{ sm: 'block', md: 'none' }} onClick={()=>setOpenMenu(!openMenu)}>
            <MenuIcon sx={{ fontSize: 42 }} />
          </Box>
        </Box>
      </Box>
      {
        openMenu && 
        <Box 
          display={'flex'}
          flexDirection={'column'} 
          justifyContent={'start'} 
          alignItems={'start'} 
          pl={4} pb={4} pt={20}
          sx={{
            position: 'absolute',
            width: '100%',
            background: palette.common.black,
            zIndex: 100,
          }}
        >
          {
            navItems.map((item, i)=> (
            <Button variant="" key={i}
              sx={{
                background: 'none !important',
                fontSize: 18,
                fontStyle: 'normal',
                textTransform: 'initial',
                fontWeight: 400,
              }}
              onClick={()=> router.push(`/${item.to}`)}
            >{item.name}</Button>
          ))
          }
        </Box>
      }
    </Box>
  );
}
