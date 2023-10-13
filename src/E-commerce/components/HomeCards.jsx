import React from 'react'
import "./pages/home/Home.css"

const HomeCards = ({Data}) => {
  return (
    <div className='home_grocery'>
    {   Data && Data.slice(0,5).map((item,index)=>
            <div key={index}>
                <img src={item.image} alt='not found'/>
                <span>{item.title}</span>
                <p>{item.quantity}</p>
                <div style={{display:"flex",alignItems:"center"}}>
                  <p className='sprice'>{item.sprice}</p>
                  <p className='mprice'>{item.mprice}</p>
                  <p className='discount'>{item.discount}off</p>
                </div>
            </div>
    )}
    </div>
  )
}

export default HomeCards