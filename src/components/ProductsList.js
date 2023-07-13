import "./AllProducts.css"
import Collection from "../img/Collection for berries (plastic).png"
import Gloves from "../img/Gloves (black).png"
import {useParams} from "react-router-dom";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

function ProductsList() {
    let {categoriesID} = useParams();
    const baseURL = `http://localhost:3333/categories/${categoriesID}`;

    const [post, setPost] = React.useState(null);
    

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
            {post.data.map((id) => {
                        return <li className="all-products-list">
                    <img src={"http://localhost:3333" + id.image} className="all-products-img"></img>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">199<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">{id.price}</p>
                        <p className="all-products-sale">-7%</p>
                    </div>
                    <div className="all-products-product"><Link to={"/products/" + id.id}>{id.title}</Link></div>
                </li>
                })}
                {/* <li className="all-products-list">
                    <img src={Gloves} className="all-products-img"></img>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">199<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">250$</p>
                        <p className="all-products-sale">-7%</p>
                    </div>
                    <div className="all-products-product">Gloves (black)</div>
                </li>
                <li className="all-products-list">
                    <img src={Collection} className="all-products-img"></img>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">199<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">250$</p>
                        <p className="all-products-sale">-7%</p>
                    </div>
                    <div className="all-products-product">Secateurs</div>
                </li>
                <li className="all-products-list">
                    <img src={Gloves} className="all-products-img"></img>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">199<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">250$</p>
                        <p className="all-products-sale">-7%</p>
                    </div>
                    <div className="all-products-product">Gloves (black)</div>
                </li>
                <li className="all-products-list">
                    <img src={Collection} className="all-products-img"></img>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">199<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">250$</p>
                        <p className="all-products-sale">-7%</p>
                    </div>
                    <div className="all-products-product">Secateurs</div>
                </li>
                <li className="all-products-list">
                    <img src={Gloves} className="all-products-img"></img>
                    <div className="all-products-costs">
                        <p className="all-products-cost-with-sale">199<span className="all-products-cost-with-sale">$</span></p>
                        <p className="all-products-cost-without-sale">250$</p>
                        <p className="all-products-sale">-7%</p>
                    </div>
                    <div className="all-products-product">Gloves (black)</div>
                </li> */}
            </ul>
        </section>
    )
}

export default ProductsList;