import "./Catalog.css";
import Fertilizer from "../img/Fertilizer.png"
import Protective from "../img/Protective products and septic tanks.png"
import Planting from "../img/Planting material.png"
import Tools from "../img/Tools and Inventory.png"

function Catalog() {
    return (
        <section className="container catalog">
            <div className="catalog-title">
                <h3 className="catalog-heading">Catalog</h3>
                <a className="catalog-link">All categories</a>
            </div>
            <div className="catalog-list">
                <ul className="catalog-list">
                    <li className="catalog-item">
                        <img className="catalog-img" src={Fertilizer}></img>
                        <a className="catalog-item-link">Fertilizer</a>
                    </li>
                    <li className="catalog-item">
                        <img className="catalog-img" src={Protective}></img>
                        <a className="catalog-item-link">Protective products and septic tanks</a>
                    </li>
                    <li className="catalog-item">
                        <img className="catalog-img" src={Planting}></img>
                        <a className="catalog-item-link">Planting material</a>
                    </li>
                    <li className="catalog-item">
                        <img className="catalog-img" src={Tools}></img>
                        <a className="catalog-item-link">Tools and Inventory</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Catalog;