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
                <Link to={"/"}><li>Main Page</li></Link>
                <Link to={"/allproducts"}><li>All products</li></Link>
                <Link to={"/error"}><li>All sales</li></Link> 
                {/* To make link to page allproducts with choice "discounted items" */}
            </ul>
            <Link to={"/basket"}><Basket className="basket" /></Link>
        </header>
    )
}

export default Header;