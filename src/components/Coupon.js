import "./Coupon.css";
import gnome from "../img/gnome-coupon.png"

function Coupon() {
    return (
        <section className="container coupon">
            <div><img src={gnome}></img></div>
            <div>
                <p>5% off</p>  
                <p>on the first order</p>
                <input></input>
                <button>Get a discount</button>
            </div>
        </section>
    )
}

export default Coupon;