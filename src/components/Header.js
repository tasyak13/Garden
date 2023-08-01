import "./Header.css"
import logo from "../img/logo.png"
import { ReactComponent as Basket }  from "../img/bask.svg"
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <header className="container">
            <img className="logo-img" src={logo}></img>
            <Link to={"/categories"}><button className="button-header">Catalog</button></Link>
            <ul className="header-list">
                <li><Link to={"/"}>Main Page</Link></li>
                <li><Link to={"/all-products"}>All products</Link></li>
                <li><Link to={"/ex?showDiscount=true"}>All sales</Link></li>
                {/* To make link to page allproducts w</li></Link>ith choice "discounted items" */}
            </ul>
            <Link to={"/basket"}><Basket className="basket" /></Link>
        </header>
    )
}

export default Header;