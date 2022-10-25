import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Slider from '../Common/Slider'
import Info from './Componant/InfoSection/Info'
import Sales from './Componant/SealsFeature/Sales'
import styles from '../styles/Home.module.css'
import Feature from './Componant/Selling/Feature'
import InfoTwo from './Componant/InfoSectionTwo/InfoTwo'
import FeatureProduct from './Componant/Selling/FeatureProduct'
import Ads from './Componant/Selling/Ads'
import Footer from './Componant/Footer/Footer'

const Home: NextPage = () => {
  const data:any=[
    {
      id:1,
      name:'Laptop & Computer'
    },
    {
      id:2,
      name:'Cellphone'
    },
    {
      id:3,
      name:'Speaker & Audio'
    },
    {
      id:4,
      name:'Video Game'
    }
  ]

  const recommendation:any=[
    {
      id:1,
      name:'View All'
    }
  ]
return (
  <>
    <Header />
    <Navbar />
    <Slider />
    <Info />
    <Sales />
    <div className='container'>
      <Feature heading='Top Deals Of The Day' time='time' />
      <InfoTwo />
      <Feature heading='Top Selling Products' data={data}/>
      <FeatureProduct />
      <Ads />
      <Feature heading='Recommendation for you' data={recommendation}/>
    </div>
    <Footer />
  </>
)
}

export default Home
