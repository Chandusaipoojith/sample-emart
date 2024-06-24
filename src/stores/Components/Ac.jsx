import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const First=acData.slice(0,5)
    return (
      <>
      <Link to="/ac" style={{textDecoration:"none", color:"black", fontSize:"24px"}}> ACs</Link>
      <Link to= "/ac" style={{ marginLeft: '80%' ,textDecoration:"none", color:"black"} }><span className='see-more'>Click here to see more</span></Link>
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