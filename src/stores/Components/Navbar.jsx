import React from 'react'
import { Link } from 'react-router-dom'
import WatchPage from '../pages/WatchPage'
const Navbar = () => {
  return (
    <>
    <div className='navSection'>
        <div className="title">
            <Link to="/" style={{textDecoration:'none', color:'white'}}>
            <h2>E-Mart</h2>
            </Link>
        </div>
        <div className="search">
            <input type='text' placeholder='Search'/>
        </div>
        <div className="user">
            <div className="userdetail">
                SignUp/SignIn
            </div>
            <Link to ="/cart" style={{textDecoration:'none', color:'white'}}>
            <div className="cart">Cart</div>
            </Link>
        </div>
        
    </div>
    <div className="subMenu">
        <ul>
            <Link to='/watch' style={{textDecoration:'none'}}>
            <li>Watches</li>
            </Link>
            <Link to='/laptop' style={{textDecoration:'none'}}>
            <li>Laptops</li>
            </Link>
            <Link to='/ac' style={{textDecoration:'none'}}>
            <li>ACs</li>
            </Link>
            <Link to='/mobile' style={{textDecoration:'none'}}>
            <li>Mobiles</li>
            </Link>
           
        </ul>
    </div>
    </>
    
  )
}

export default Navbar