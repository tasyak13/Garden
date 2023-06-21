import "./AllProducts.css"
import Collection from "../img/Collection for berries (plastic).png"
import Gloves from "../img/Gloves (black).png"

function AllProducts() {
    return (
        <section className="container all-products">
            <h3 className="all-products-title">All products</h3>
            <div className="all-products-choice">
                <p className="all-products-choice-text">Price</p>
                <input className="all-products-choice-input" type="number" placeholder="from"></input>
                <input className="all-products-choice-input" type="number" placeholder="to"></input>
                <p className="all-products-choice-text discount">Discounted items</p>
                <input className="all-products-choice-radio" type="radio"></input>
                <p className="all-products-choice-text sort">Sorted</p>
                <select className="all-products-choice">
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