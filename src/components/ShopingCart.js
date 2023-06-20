import "./ShopingCart.css"
import Manhole from "../img/Manhole.png"
import Curb from "../img/Curb.png"
import Bridge from "../img/Bridge.png"
import { ReactComponent as Close }  from "../img/Close.svg"

function ShopingCart() {
    return (
        <section className="container shoping-cart">
            <h3 className="shoping-cart-title">Shopping cart</h3>
            <p className="shoping-cart-back">Back to the store </p>
            <div className="shoping-cart-basket">
                <div className="shop">
                <div className="shoping-cart-content">
                    <ul className="shoping-cart-list">
                        <li className="shoping-cart-item">
                            <img className="shoping-cart-img" src={Manhole}></img>
                            <div>
                                <p className="shoping-cart-text">Manhole cover Stump medium polystone</p>
                                <div className="shoping-cart-button">
                                    <button>-</button>
                                    <p className="shoping-cart-value">1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="shoping-cart-cost">
                                <p className="shoping-cart-cost-with-sale">199<span className="shoping-cart-cost-with-sale">$</span></p>
                                <p className="shoping-cart-cost-without-sale">250$</p>
                            </div>
                            <Close className="close"/>
                        </li>
                    </ul>
                </div>
                <div className="shoping-cart-content">
                    <ul className="shoping-cart-list">
                        <li className="shoping-cart-item">
                            <img className="shoping-cart-img" src={Curb}></img>
                            <div>
                                <p className="shoping-cart-text">Curb tape 20cm*9m Figured green</p>
                                <div className="shoping-cart-button">
                                    <button>-</button>
                                    <p className="shoping-cart-value">1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="shoping-cart-cost">
                                <p className="shoping-cart-cost-with-sale">199<span className="shoping-cart-cost-with-sale">$</span></p>
                                <p className="shoping-cart-cost-without-sale">250$</p>
                            </div>
                            <Close className="close"/>
                        </li>
                    </ul>
                </div>
                <div className="shoping-cart-content">
                    <ul className="shoping-cart-list">
                        <li className="shoping-cart-item">
                            <img className="shoping-cart-img" src={Bridge}></img>
                            <div>
                                <p className="shoping-cart-text">Bridge with lanterns wood 860-43R</p>
                                <div className="shoping-cart-button">
                                    <button>-</button>
                                    <p className="shoping-cart-value">1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="shoping-cart-cost">
                                <p className="shoping-cart-cost-with-sale">199<span className="shoping-cart-cost-with-sale">$</span></p>
                                <p className="shoping-cart-cost-without-sale">250$</p>
                            </div>
                            <Close className="close"/>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="shoping-cart-order">
                    <p className="shoping-cart-order-title">Order details</p>
                    <div className="shoping-cart-order-total-cost">
                        <p className="shoping-cart-order-total">Total</p>
                        <p className="shoping-cart-order-cost">3077,00$</p>
                    </div>
                    <input placeholder="Phone number" className="shoping-cart-order-input"></input>
                    <button className="shoping-cart-order-button">Order</button>
                </div>   
            </div>
            
        </section>
    )
}

export default ShopingCart;