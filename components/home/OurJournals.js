import { Box } from "@mui/material"

import SimilarCarousel from "../carousel/SimilarCarousel"

const propertyItems1= [
  { img: '/images/offPlan/08.jpg',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: '4 MIN. READ',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/10.jpg',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: '4 MIN. READ',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/11.jpg',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: '4 MIN. READ',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/14.jpg',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: '4 MIN. READ',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/15.jpg',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: '4 MIN. READ',
    date: 'APR 14TH, 2023'
  },
]

export const OurJournals = () => {
  return (
    <Box py={8} px={0}>
      <Box display={{ sm: 'none', xs: 'block' }}>
        <SimilarCarousel data={propertyItems1} title='ourJournal' />
      </Box>
    </Box>
  )
}