import React from 'react'
import { watchData } from '../stores/data/watch'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/Components/Navbar'

import { useCart } from "../stores/context/CartContext";

const WatchSingle = () => {
const {id}=useParams()
const {addToCart, cartItems} = useCart()
const product=watchData.find((item)=>item.id)
    return (
        <>
        <Navbar/>
    <div className='ind-section'>
        <div className='ind-image'>
            <img src={product.image} alt=''/>

        </div>
        <div className='ind-details space'>
            <div className="ind-brand space">
                <h2>{product.brand}</h2>
            </div>
        <div className='ind-model space'>
            <h2>{product.model}</h2>
        </div>
        
        <div className="ind-price space">
            <h3>Price: ${product.price}</h3>
        </div>
        
        <div className='ind-desc space'>
            <p>
            {product.description}
            </p>
        
        </div>
        <div className="ind-button space">
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
        </div>
</div>
</>
  )
}

export default WatchSingle