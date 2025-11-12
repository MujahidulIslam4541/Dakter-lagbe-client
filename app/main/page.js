import React from 'react'
import Banner from '../pages/Banner/page'
import OurService from '../pages/Service/page'
import OurReviews from '../pages/reviews/page'
import OurDoctors from './doctors/page'
import ContactUs from '../pages/contactUs/page'

const MainHome = () => {
  return (
    <div>
            <Banner />
      <OurService />
      <OurReviews />
      <OurDoctors />
      <ContactUs />
    </div>
  )
}

export default MainHome
