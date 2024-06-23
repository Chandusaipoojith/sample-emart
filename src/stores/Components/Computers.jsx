import React from 'react'
import { computerData } from '../data/Laptop'

const Computers = () => {
    const First=computerData.slice(0,5)
  return (
    <>
    <h2>Laptops</h2>
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

export default Computers