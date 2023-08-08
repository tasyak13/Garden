import "./Sale.css"
import flowers from "../img/flowers.png";
import {Link} from "react-router-dom";

function Sale() {
    return (
        <section className="container sale-new-season">
            <div className="sale">
                <h3 className="sale-title">Sale </h3>
                <p className="sale-new-season">New season</p>
                <Link to={"/all-products?showDiscount=true"} className="sale-button">Sale</Link>
            </div>
            <div>
                <img className="sale-img" src={flowers} alt="Image of bush"></img>
            </div>
        </section>
    )
}

export default Sale;