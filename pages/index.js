import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '@/components/carousel/Carousel'
import FeatureApart from '@/components/feature/FeatureApart'
import PopularArea from '@/components/popular/PopularArea'
import Journal from '@/components/Journal/Journal'
import OffPlan from '@/components/plan/Off-plan'
import StayBiling from '@/components/staybil/StaylBiling'
import SearchBar from '@/components/search/SearchBar'
import FeaturedVilla from '@/components/feature/FeaturedVilla'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const banner_data =[
    {
      img:'/images/banner.png',
    },
    {
      img:'/images/banner.png',
    },
    {
      img:'/images/banner.png',
    }
  ]
  return (
    <div className='w-full bg-black'>
      <div className='flex flex-col items-center justify-center text-center relative pt-28'>
        <span className='text-4xl text-white font-normal max-w-2xl py-28'>
          The address for luxury property. Exceptional homes, unrivalled expertise.
        </span>
        <SearchBar />
      </div>
      <Carousel data={banner_data} title="banner" />
      <FeatureApart />
      <PopularArea />
      <FeaturedVilla />
      <Journal />
      <OffPlan />
      <StayBiling />
      <Footer />
    </div>
  )
}
