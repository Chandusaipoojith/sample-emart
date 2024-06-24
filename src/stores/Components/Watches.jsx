import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
const Watches = () => {
    const First=watchData.slice(0,5)
  return (
    <>
    <Link to="/watch" style={{textDecoration:"none", color:"black", fontSize:"24px"}}> Watches</Link>
    <Link to= "/watch" style={{ marginLeft: '80%' ,textDecoration:"none", color:"black"} }><span className='see-more'>Click here to see more</span></Link>
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

export default Watches