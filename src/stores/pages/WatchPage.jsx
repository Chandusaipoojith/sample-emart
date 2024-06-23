import React, { useState } from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const WatchPage = () => {
  const [selectedBrands, setSelectedBrands] = useState([])

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    } else {
      setSelectedBrands([...selectedBrands, brand])
    }
  }

  const filteredProducts = selectedBrands.length
    ? watchData.filter((watch) => selectedBrands.includes(watch.brand))
    : watchData

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected-container">
          <div className="pro-selected">
            {[...new Set(watchData.map((watch) => watch.brand))].map((brand) => (
              <div className="pro-input" key={brand}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/watch/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WatchPage