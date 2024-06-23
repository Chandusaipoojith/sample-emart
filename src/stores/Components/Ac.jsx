import React from 'react'
import { acData } from '../data/ac'
const Ac = () => {
    const First=acData.slice(0,5)
    return (
      <>
      <h2>ACs</h2>
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

export default Ac