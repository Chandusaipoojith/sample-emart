import React from 'react'
import { useParams } from 'react-router-dom'
import { acData } from '../stores/data/ac'
import Navbar from '../stores/Components/Navbar'

import { useCart } from "../stores/context/CartContext";

const AcSingle = () => {
  const {id}=useParams()
  const {addToCart, cartItems} = useCart()
  const product =acData.find((item)=>item.id==id)
  return (
    <>
    <Navbar/>
    <div className='ind-section'>

      <div className="ind-image">
        <img src={product.image} alt=''/>
      </div>


      <div className="ind-details space">

        <div className="ind-brand space">
          <h2>{product.company}</h2>
        </div>


      <div className='ind-model space'>
        <h2>{product.model}</h2>
      </div>


      <div className='ind-price space'>
        <h2>Price: ${product.price}</h2>
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

export default AcSingle