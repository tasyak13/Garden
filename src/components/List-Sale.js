import "./List-Sale.css"
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

const baseURL = "http://localhost:3333/products/all";

function ListSale() {

    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setProducts(response.data);
        });
    }, []);

    if (!products) return null;

    const productsSale = products.filter(obj => obj.discont_price !== null);

    const random = (arr, count) =>{
        const shuffled = arr.sort(() => 0.5 - Math.random())
        return shuffled.slice(0,count)
    }

    const product_main = random(productsSale, 3);

    return (
        <section className="container list-sale">
            <p className="list-sale-title">Sale</p>
            <div className="list-sale-block">
                <ul className="list-sale-list">
                    {product_main.map((id) => {
                            return  <li className="list-sale-item">
                            <Link to={"/products/" + id.id}><img className="list-sale-img" src={"http://localhost:3333" + id.image} alt={id.title}></img></Link>
                            <div className="list-sale-cost">
                                <p className="list-sale-cost-big">{id.discont_price}$</p>
                                <p className="list-sale-cost-line-through">{id.price}$</p>
                                <p className="list-sale-cost-sale">{(((id.price - id.discont_price) / id.price) * 100).toFixed(2)}%</p>
                            </div>
                            <Link to={"/products/" + id.id}><p className="list-sale-text">{id.title}</p></Link>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ListSale;