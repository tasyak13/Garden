import "./Header.css"
import logo from "../img/logo.png"
import { ReactComponent as Basket }  from "../img/bask.svg"

function Header() {
    return (
        <header className="container">
            <img className="logo-img" src={logo}></img>
            <button className="button-header">Catalog</button>
            <ul className="header-list">
                <li>Main Page</li>
                <li>All products</li>
                <li>All sales</li>
            </ul>
            <Basket className="basket" />
        </header>
    )
}

export default Header;