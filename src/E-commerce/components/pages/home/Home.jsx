import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { appliances, electronics, fashion, mobiles } from '../../../store/Database'
import HomeCards from '../../HomeCards'
import "./Home.css"

const Home = () => {
  return (
    <div>
        <Carousel className='slider' interval={1000} animation="slide"
        navButtonsAlwaysVisible 
        indicatorContainerProps={{
            style: {
                position : "absolute",
                zIndex: "2",
                bottom: "1em",
            }
        }}
        >
            <img src='https://iqoo-the-ecommerceapp.netlify.app/static/media/watch.30b697cbb7a3e3a3e152.webp' alt='not found' />
            <img src='https://iqoo-the-ecommerceapp.netlify.app/static/media/sales.13ff462965448fef8a42.png' alt='not found' />
            <img src='https://www.boat-lifestyle.com/cdn/shop/files/IM-171_desktop_1440x.jpg?v=1690344706'
            alt='not found' />
        </Carousel>
        <section>
            <h1>Best of the Mobiles</h1>
            <HomeCards Data={mobiles}/>
        </section>
        <section>
            <h1>Best of the Fashion</h1>
            <HomeCards Data={fashion}/>
        </section>
        <section>
            <h1>Best of the Electronics</h1>
            <HomeCards Data={electronics}/>
        </section>
        <section>
            <h1>Best of the Appliances</h1>
            <HomeCards Data={appliances}/>
        </section>
    </div>
  )
}

export default Home