import "./CategoriesList.css";
// import Fertilizer from "../img/Fertilizer.png"
// import Protective from "../img/Protective products and septic tanks.png"
// import Planting from "../img/Planting material.png"
// import Tools from "../img/Tools and Inventory.png"
// import Home from "../img/Home Goods.png"
// import Pots from "../img/Pots and planters.png"
// import Indoor from "../img/For indoor plants.png"
// import Garden from "../img/Garden figures.png"
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

const baseURL = "http://localhost:3333/categories/all";

function CategoriesList() {
    const [post, setPost] = React.useState(null);
    

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

    // использовать slice для загрузки только 4 ервых категорий на первой странице

    if (!post) return null;

    return (
        <section className="container categories-list">
            <div className="categoties-list-title">Categories</div>
            <div className="categoties-list-items">
                <ul className="categoties-list-list">
                    {/* <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Fertilizer}></img>
                        <p className="categoties-list-text">Fertilizer</p>
                    </li> */}
                    {post.map((id) => {
                        return <li className="categoties-list-item">
                        <img className="categoties-list-img" src={"http://localhost:3333" + id.image} alt={id.title}></img>
                        <p className="categoties-list-text"><Link to={"/categories/" + id.id}>{id.title}</Link></p>
                        </li>
                    })}
                    {/* <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Protective}></img>
                        <p className="categoties-list-text">Protective products and septic tanks</p>
                    </li>
                    <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Planting}></img>
                        <p className="categoties-list-text">Planting material</p>
                    </li>
                    <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Tools}></img>
                        <p className="categoties-list-text">Tools and Inventory</p>
                    </li>
                    <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Home}></img>
                        <p className="categoties-list-text">Home Goods</p>
                    </li>
                    <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Pots}></img>
                        <p className="categoties-list-text">Pots and planters</p>
                    </li>
                    <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Indoor}></img>
                        <p className="categoties-list-text">For indoor plants</p>
                    </li>
                    <li className="categoties-list-item">
                        <img className="categoties-list-img" src={Garden}></img>
                        <p className="categoties-list-text">Garden figures</p>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}

export default CategoriesList;