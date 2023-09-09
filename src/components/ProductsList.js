import "./AllProducts.css"
import {useParams} from "react-router-dom";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { allCartAction } from "../store/reducer/cartReducer";

function ProductsList() {
    let {categoriesID} = useParams();
    const baseURL = `http://localhost:3333/categories/${categoriesID}`;

    const [post, setPost] = React.useState(null);

    const dispatch = useDispatch();

    const addToCart = (p) => dispatch(allCartAction(p));

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <section className="container all-products">
            <h3 className="all-products-title">{post.category.title}</h3>
            <div className="all-products-choice">
                <div className="all-products-choice-price">
                <p className="all-products-choice-text">Price</p>
                <input className="all-products-choice-input" type="number" placeholder="from"></input>
                <input className="all-products-choice-input" type="number" placeholder="to"></input>
                </div>
                <div className="all-products-choice-checkbox">
                <p className="all-products-choice-text discount">Discounted items</p>
                <input className="all-products-choice-radio" type="checkbox"></input>
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
            {post.data.map((p) => {
                if(p.discont_price === null) {
                    return <li className="all-products-list">
                    <Link to={"/products/" + p.id}><img src={"http://localhost:3333" + p.image} className="all-products-img"></img></Link>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">{p.price}<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale"></p>
                        <p className="all-products-sale"></p>
                    </div>
                    <div className="all-products-product"><Link to={"/products/" + p.id}>{p.title}</Link></div>
                    <button className="btn"
                            onClick={() => addToCart(p)} 
                    >Add to cart</button>
                </li>
                }
                else {
                    return <li className="all-products-list">
                    <Link to={"/products/" + p.id}><img src={"http://localhost:3333" + p.image} className="all-products-img"></img></Link>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">{p.discont_price}<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">{p.price}$</p>
                        <p className="all-products-sale">{(((p.price - p.discont_price) / p.price) * 100).toFixed(2)}%</p>
                    </div>
                    <div className="all-products-product"><Link to={"/products/" + p.id}>{p.title}</Link></div>
                    <button className="btn"
                            onClick={() => addToCart(p)} 
                    >Add to cart</button>
                </li>
                }
                        
                })}
            </ul>
        </section>
    )
}

export default ProductsList;