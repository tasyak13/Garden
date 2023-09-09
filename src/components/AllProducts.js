import "./AllProducts.css"
import axios from "axios";
import React from "react";
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


const baseURL = "http://localhost:3333/products/all";

function AllProducts() {
    const [post, setPost] = React.useState(null);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(1000);
    const [searchParams] = useSearchParams();
    const [showDiscount, setShowDiscount] = useState(!!searchParams.get('showDiscount'));
    const [filteredData, setFilteredData] = useState([]);
    const [sortOrder, setSortOrder] = useState('a');
    const [onlySales, setOnlySales] = useState();

    const filterData = (post, showDiscount, input1, input2, sortOrder) => {
      if (!post) {
        return
      }

      const filteredArray = post
        .filter(id => id.price >= input1 && id.price <= input2)
        .sort((a, b) => {
          if (sortOrder === 'a') {
            return (a.discont_price || a.price) - (b.discont_price || b.price);
          } else {
            return (b.discont_price || b.price) - (a.discont_price || a.price);
          }
        });

          if (showDiscount) {
            const filtered = filteredArray.filter((product) => product.discont_price > 0);
            setFilteredData(filtered);
          } else {
            setFilteredData(filteredArray);
          }
        };
  
    
    React.useEffect(() => {
        setOnlySales(!!searchParams.get('showDiscount'))
        setShowDiscount(true)
        console.log("This is", !!searchParams.get('showDiscount'))
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          setFilteredData(response.data)
          filterData(response.data, showDiscount, input1, input2, sortOrder)
        });
    }, []);

    if (!post) return null;

    const handleInput1Change = (e) => {
        let value = parseInt(e.target.value);
        value = isNaN(value) ? 0 : Math.max(0, value);
        setInput1(value);
        filterData(post, showDiscount, value, input2, sortOrder);
      };
    
      const handleInput2Change = (e) => {
        let value = parseInt(e.target.value);
        value = isNaN(value) ? 1000 : Math.max(0, value);
        setInput2(value);
        filterData(post, showDiscount, input1, value, sortOrder);
      }; 

      const handleCheckboxChange = (e) => {
        setShowDiscount(e.target.checked);
        filterData(post, e.target.checked, input1, input2, sortOrder);
      };

      const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);
        filterData(post, e.target.checked, input1, input2, value);
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
                
                {!onlySales &&
                <div className="all-products-choice-checkbox">
                <p className="all-products-choice-text discount">Discounted items</p>
                <input className="all-products-choice-radio" type="checkbox" value={showDiscount} onChange={handleCheckboxChange}></input>
                </div>}
                
                <div className="all-products-choice-sort">
                <p className="all-products-choice-text sort">Sorted</p>
                <select className="all-products-choice" value={sortOrder} onChange={handleSortChange}>
                    <option value="a">ascending</option>
                    <option value="z">by default</option>
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

export default AllProducts;