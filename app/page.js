import React from 'react'
import Banner from './pages/Banner/page'
import OurService from './pages/Service/page'
import OurReviews from './pages/reviews/page'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <OurReviews></OurReviews>
    </div>
  )
}

export default Home
