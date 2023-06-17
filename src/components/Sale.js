import "./Sale.css"
import flowers from "../img/flowers.png"

function Sale() {
    return (
        <section className="container sale-new-season">
            <div>
                <p>Sale </p>
                <p>New season</p>
                <button>Sale</button>
            </div>
            <div>
                <img src={flowers}></img>
            </div>
        </section>
    )
}

export default Sale;