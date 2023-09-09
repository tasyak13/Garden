import "./AboutProduct.css"
import Spade from "../img/Spade.png"
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { allCartAction } from "../store/reducer/cartReducer";
import { useDispatch } from 'react-redux'

function AboutProduct() {

    const dispatch = useDispatch();

    const addToCart = () => dispatch(allCartAction());

    let {productID} = useParams();
    const baseURL = `http://localhost:3333/products/${productID}`;

    const [post, setPost] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <section className="container product">
            <h3 className="product-title">{post[0].title}</h3>
            <div className="product-card">
                <img className="product-img" src={"http://localhost:3333" + post[0].image}></img>
                <div className="product-card-about">
                    <div className="product-cost">
                        <p className="product-cost-with-sale">{post[0].discont_price || post[0].price}$<span className="product-cost-with-sale">$</span></p>
                        <p className="product-cost-without-sale">{post[0].price}$</p>
                        <p className="product-cost-sale">{(((post[0].price - post[0].discont_price) / post[0].price) * 100).toFixed(2)}%</p>
                    </div>
                    <button className="product-button" onClick={addToCart}>To cart</button>
                    <hr className="product-line"></hr>
                    <p className="product-description-title">Description</p>
                    <p className="product-description-size">{post[0].description}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProduct;