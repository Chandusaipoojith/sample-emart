import React from 'react'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {
    const First=mobileData.slice(0,5)
    return (
      <>
      <h2>Mobiles</h2>
      <div className='proSection'>
          {First.map((item)=>{
              return(
                  <div className='Imgbox'>
                      <img className='proImg' src={item.image} alt={item.description}/>
                      </div>
              )
  
          })
          }
      </div>
      </>
    )
}

export default Mobiles