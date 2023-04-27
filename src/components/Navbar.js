import { useRouter } from "next/router"
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Buy', to: '/buy' },
  { name: 'Sell', to: '/sell' },
  { name: 'Rent', to: '/rent' },
  { name: 'Properties', to: '/properties' },
]

export default function Navbar() {
  const router = useRouter();
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Typography sx={{

      }}>
        DELATTIO
      </Typography>
      <Box display={'flex'} alignContent={'center'}>
        {
          navItems.map((item, i)=> (
            <Button key={i}
              onClick={()=> router.push(`/${item.to}`)}
            >{item.name}</Button>
          ))
        }
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <select>
          <option>AED</option>
          <option>AED</option>
        </select>
        <Link target="_blank" href="https://supercluster-labs.beehiiv.com/subscribe">
          <Button>
            Sign In
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
