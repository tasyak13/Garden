import "./Catalog.css";
import {Link} from "react-router-dom";
import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3333/categories/all";

function Catalog() {
    const [categories, setCategories] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setCategories(response.data);
        });
    }, []);

    if (!categories) return null;

    let cat = categories.splice(4, 1)

    return (
        <section className="container catalog">
            <div className="catalog-title">
                <h3 className="catalog-heading">Catalog</h3>
                <Link to={"/categories"} className="catalog-link">All categories</Link>
            </div>
            <div className="catalog-list">
                <ul className="catalog-list">
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

export default Catalog;