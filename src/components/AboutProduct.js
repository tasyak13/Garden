import "./AboutProduct.css"
import Spade from "../img/Spade.png"

function AboutProduct() {
    return (
        <section className="container product">
            <h3 className="product-title">Spade</h3>
            <div className="product-card">
                <img className="product-img" src={Spade}></img>
                <div className="product-card-about">
                    <div className="product-cost">
                        <p className="product-cost-with-sale">199<span className="product-cost-with-sale">$</span></p>
                        <p className="product-cost-without-sale">250$</p>
                        <p className="product-cost-sale">-7%</p>
                    </div>
                    <button className="product-button">To cart</button>
                    <hr className="product-line"></hr>
                    <p className="product-description-title">Description</p>
                    <p className="product-description-size">Size, cm - 45x33</p>
                    <p className="product-description-text">Material: frost-resistant polymer, reinforced by a steel galvanized 
                    bar, riveted to the blade, aluminum handle with a V-shaped handle.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProduct;