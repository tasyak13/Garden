import "./AllProducts.css"
import Collection from "../img/Collection for berries (plastic).png"
import Gloves from "../img/Gloves (black).png"

function AllProducts() {
    return (
        <section className="container all-products">
            <h3 className="all-products-title">All products</h3>
            <div className="all-products-choice">
                <p>Price</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>Discounted items</p>
                <input type="radio"></input>
                <p>Sorted</p>
                <select>
                    <option>by default</option>
                    <option>ascending</option>
                </select>
            </div>
            <ul className="all-products-list">
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
            </ul>
        </section>
    )
}

export default AllProducts;