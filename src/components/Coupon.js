import "./Coupon.css";
import gnome from "../img/gnome-coupon.png"

function Coupon() {
    return (
        <section className="container coupon">
            <div><img className="coupon-img" src={gnome}></img></div>
            <div className="coupon-title">
                <p className="coupon-subtitle">5% off</p>  
                <p className="coupon-text">on the first order</p>
                <input placeholder="+49" className="coupon-input"></input>
                <button className="coupon-button">Get a discount</button>
            </div>
        </section>
    )
}

export default Coupon;