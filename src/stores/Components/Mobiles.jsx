import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'


const Mobiles = () => {
    const First = mobileData.slice(0, 5)
    return (
        <>
            
                <Link to="/mobile" style={{ textDecoration: "none", color: "black", fontSize: "24px" }}>Mobiles</Link>
              
                <Link to= "/mobile" style={{ marginLeft: '80%' ,textDecoration:"none", color:"black"} }><span className='see-more'>Click here to see more</span></Link>
                
           
            <div className='proSection'>
                {First.map((item) => {
                    return (
                        <div className='Imgbox'>
                            <img className='proImg' src={item.image} alt={item.description} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Mobiles