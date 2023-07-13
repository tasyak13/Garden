import "./AboutProduct.css"
import Spade from "../img/Spade.png"
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function AboutProduct() {
    let {productID} = useParams();
    const baseURL = `http://localhost:3333/products/${productID}`;
    console.log(baseURL)

    const [post, setPost] = React.useState(null);
    

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;

    console.log(post)

    return (
        <section className="container product">
            <h3 className="product-title">{post[0].title}</h3>
            <div className="product-card">
                <img className="product-img" src={"http://localhost:3333" + post[0].image}></img>
                <div className="product-card-about">
                    <div className="product-cost">
                        <p className="product-cost-with-sale">199<span className="product-cost-with-sale">$</span></p>
                        <p className="product-cost-without-sale">250$</p>
                        <p className="product-cost-sale">-7%</p>
                    </div>
                    <button className="product-button">To cart</button>
                    <hr className="product-line"></hr>
                    <p className="product-description-title">Description</p>
                    <p className="product-description-size">Size, cm - 45x33</p>
                    <p className="product-description-text">{post[0].description}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProduct;