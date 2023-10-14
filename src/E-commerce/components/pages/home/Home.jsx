import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import CardLayout from '../../layout/CardLayout'
import "./Home.css"
import axios from 'axios'

const Home = () => {
    const [Data, setData] = useState("")
    useEffect(() => {
        axios(`http://localhost:4000/home`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])
    const Mobiles = Data && Data.filter((j) => j.category === "mobiles")
    const Fashion = Data && Data.filter((j) => j.category === "fashion")
    const Electronics = Data && Data.filter((j) => j.category === "electronics")
    const Appliances = Data && Data.filter((j) => j.category === "appliances")
    // console.log(Mobiles)
    return (
        <div>
            <Carousel className='slider' interval={1000} animation="slide"
                navButtonsAlwaysVisible
                indicatorContainerProps={{
                    style: {
                        position: "absolute",
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
                <CardLayout Data={Mobiles} />
            </section>
            <section>
                <h1>Best of the Fashion</h1>
                <CardLayout Data={Fashion} />
            </section>
            <section>
                <h1>Best of the Electronics</h1>
                <CardLayout Data={Electronics} />
            </section>
            <section>
                <h1>Best of the Appliances</h1>
                <CardLayout Data={Appliances} />
            </section>
        </div>
    )
}

export default Home