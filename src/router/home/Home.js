import React from 'react'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import HomeBanner from '../like/BannerHom/HomeBanner'
import HomeMain from '../../components/hommain/HomeMain'
import Products from '../products/Products'
import "./Home.css"

function Home() {
  return (
    <div className='container'>
      <div className="home">

        <Banner/>
        <Products/>
        <HomeBanner/>
        <HomeMain/>
        <Category/>

      </div>
    </div>
  )
}

export default Home