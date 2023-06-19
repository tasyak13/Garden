import "./List-Sale.css"
import Decorative from "../img/Decorative forged bridge.png"
import Flower from "../img/Flower basket.png"
import Aquarium from "../img/Aquarium lock.png"

function ListSale() {
    return (
        <section className="container list-sale">
            <p className="list-sale-title">Sale</p>
            <div className="list-sale-block">
                <ul className="list-sale-list">
                    <li className="list-sale-item">
                        <img className="list-sale-img" src={Decorative}></img>
                        <div className="list-sale-cost">
                            <p className="list-sale-cost-big">500$</p>
                            <p className="list-sale-cost-line-through">1000$</p>
                            <p className="list-sale-cost-sale">-7%</p>
                        </div>
                        <p className="list-sale-text">Decorative forged bridge</p>
                    </li>
                    <li className="list-sale-item">
                        <img className="list-sale-img" src={Flower}></img>
                        <div className="list-sale-cost">
                            <p className="list-sale-cost-big">500$</p>
                            <p className="list-sale-cost-line-through">1000$</p>
                            <p className="list-sale-cost-sale">-7%</p>
                        </div>
                        <p className="list-sale-text">Flower basket</p>
                    </li>
                    <li className="list-sale-item">
                        <img className="list-sale-img" src={Aquarium}></img>
                        <div className="list-sale-cost">
                            <p className="list-sale-cost-big">500$</p>
                            <p className="list-sale-cost-line-through">1000$</p>
                            <p className="list-sale-cost-sale">-7%</p>
                        </div>
                        <p className="list-sale-text">Aquarium lock</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ListSale;