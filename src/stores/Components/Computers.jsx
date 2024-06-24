import React from 'react'
import { computerData } from '../data/Laptop'
import { Link } from 'react-router-dom'
const Computers = () => {
    const First=computerData.slice(0,5)
  return (
    <>
    <Link to="/laptop" style={{textDecoration:"none", color:"black", fontSize:"24px"}}> Laptops</Link>
    <Link to= "/laptop" style={{ marginLeft: '80%' ,textDecoration:"none", color:"black"} }><span className='see-more'>Click here to see more</span></Link>
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