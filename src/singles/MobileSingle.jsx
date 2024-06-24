import React from "react";
import { mobileData } from "../stores/data/mobiles";
import { useParams } from "react-router-dom";
import Navbar from "../stores/Components/Navbar";

import { useCart } from "../stores/context/CartContext";

const MobileSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = mobileData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company space">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>Price: ${product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default MobileSingle;