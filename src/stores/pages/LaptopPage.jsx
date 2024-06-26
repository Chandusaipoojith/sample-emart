import {React,useState} from 'react';
import { computerData } from '../data/Laptop';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const LaptopPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango))
    } else {
      setSelectedProduct([...selectedProduct, mango])
    }
  }

  const filteredProduct =
    selectedProduct.length === 0
      ? computerData
      : computerData.filter((orange) => selectedProduct.includes(orange.company))

  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected-container">
          <div className="pro-selected">
          {[...new Set(computerData.map((watch) => watch.company))].map((company) => (
              <div className="pro-input" key={company}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(company)}
                    onChange={() => companyHandler(company)}
                  />
                  {company}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/laptop/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt="" />
                  </div>
                </Link>
                <div className="proModel">
                  {item.company}, {item.model}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default LaptopPage;