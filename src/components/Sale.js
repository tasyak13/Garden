import "./Sale.css"
import flowers from "../img/flowers.png"

function Sale() {
    return (
        <section className="container sale-new-season">
            <div className="sale">
                <h3 className="sale-title">Sale </h3>
                <p className="sale-new-season">New season</p>
                <button className="sale-button">Sale</button>
            </div>
            <div>
                <img className="sale-img" src={flowers} alt="Image of bush"></img>
            </div>
        </section>
    )
}

export default Sale;