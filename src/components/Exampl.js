import "./AllProducts.css"
import axios from "axios";
import React from "react";
import { useState } from 'react';


const baseURL = "http://localhost:3333/products/all";

function Exampl() {
    const [post, setPost] = React.useState(null);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(1000000);
    const [showDiscount, setShowDiscount] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const handleInput1Change = (e) => {
        let value = parseInt(e.target.value);
        value = isNaN(value) ? 0 : Math.max(0, value);
        setInput1(value);
      };
    
      const handleInput2Change = (e) => {
        let value = parseInt(e.target.value);
        value = isNaN(value) ? 100000 : Math.max(0, value);
        setInput2(value);
      };
    
      const filteredArray = post.filter(id => id.price >= input1 && id.price <= input2);

      const handleCheckboxChange = (e) => {
        setShowDiscount(e.target.checked);
        filterData(e.target.checked);
      };
    
    const filterData = (isChecked) => {
        if (isChecked) {
          const filtered = filteredArray.filter((product) => product.discont_price > 0);
          setFilteredData(filtered);
        } else {
          setFilteredData(filteredArray);
        }
      };

      const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);
      };

    return (
        <section className="container all-products">
            <h3 className="all-products-title">All products</h3>
            <div className="all-products-choice">
                <div className="all-products-choice-price">
                <p className="all-products-choice-text">Price</p>
                <input className="all-products-choice-input" value={input1} onChange={handleInput1Change} min="0"></input>
                <input className="all-products-choice-input" value={input2} onChange={handleInput2Change} min="0"></input>
                </div>
                <div className="all-products-choice-checkbox">
                <p className="all-products-choice-text discount">Discounted items</p>
                <input className="all-products-choice-radio" type="checkbox" onChange={handleCheckboxChange}></input>
                </div>
                <div className="all-products-choice-sort">
                <p className="all-products-choice-text sort">Sorted</p>
                <select className="all-products-choice">
                    <option>by default</option>
                    <option>ascending</option>
                </select>
                </div>
            </div>
            <ul className="all-products-list">
                {filteredData.map((id) => {
                        if(id.discont_price === null) {
                            return <li className="all-products-list">
                            <img src={"http://localhost:3333" + id.image} alt={id.title} className="all-products-img"></img>
                            <div className="all-products-costs">
                                <p className="all-products-cost-with-sale">{id.price}<span className="all-products-cost-with-sale">$</span></p>
                                <p className="all-products-cost-without-sale"></p>
                                <p className="all-products-sale"></p>
                            </div>
                            <div className="all-products-product">{id.title}</div>
                            </li>
                        } else {
                        return <li className="all-products-list">
                        <img src={"http://localhost:3333" + id.image} alt={id.title} className="all-products-img"></img>
                        <div className="all-products-costs">
                            <p className="all-products-cost-with-sale">{id.discont_price}<span className="all-products-cost-with-sale">$</span></p>
                            <p className="all-products-cost-without-sale">{id.price}$</p>
                            <p className="all-products-sale">{(((id.price - id.discont_price) / id.price) * 100).toFixed(2)}%</p>
                        </div>
                        <div className="all-products-product">{id.title}</div>
                    </li>}
                })};
            </ul>
        </section>
    )
}

export default Exampl;