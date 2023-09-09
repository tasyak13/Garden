import "./CategoriesList.css";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

const baseURL = "http://localhost:3333/categories/all";

function CategoriesList() {
    const [categories, setCategories] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setCategories(response.data);
        });
    }, []);

    if (!categories) return null;

    return (
        <section className="container categories-list">
            <div className="categoties-list-title">Categories</div>
            <div className="categoties-list-items">
                <ul className="categoties-list-list">
                    {categories.map((id) => {
                        return <li className="categoties-list-item">
                        <Link to={"/categories/" + id.id}><img className="categoties-list-img" src={"http://localhost:3333" + id.image} alt={id.title}></img></Link>
                        <p className="categoties-list-text"><Link to={"/categories/" + id.id}>{id.title}</Link></p>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default CategoriesList;