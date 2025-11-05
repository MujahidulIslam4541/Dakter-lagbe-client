import React from 'react'
import Banner from './pages/Banner/page'
import OurService from './pages/Service/page'
import OurReviews from './pages/reviews/page'
import OurDoctors from './pages/doctors/page'
import ContactUs from './pages/contactUs/page'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <OurReviews></OurReviews>
      <OurDoctors></OurDoctors>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
