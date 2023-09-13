import "./ShopingCart.css"
import { useDispatch } from 'react-redux'
import { deleteCartAction, incrementCountAction, decrementCountAction } from "../store/reducer/cartReducer"
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

function ShopingCart() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => axios.post('http://localhost:3333/order/send', {
        data, cart_state
      })
      .then((response) => {
        console.log(response);
        console.log(data)
      }, (error) => {
        console.log(error);
      });

    const dispatch = useDispatch();

    const cart_state = useSelector(state =>state.allcart)

    const total = (cart_state.reduce((acc, {fullPrice,count}) => acc + fullPrice * count, 0)).toFixed(2)  

    console.log(cart_state)
    console.log(total)

    return (
        <section className="container shoping-cart">
            <h3 className="shoping-cart-title">Shopping cart</h3>
            <Link to={"/all-products"}><p className="shoping-cart-back">Back to the store </p></Link>
            <div className="shoping-cart-basket">
                <div className="shop">
                    {
                        cart_state.map((id) => {
                            if(id.discont_price === null) {                            
                            return <div className="shoping-cart-content">
                            <ul className="shoping-cart-list">
                                <li className="shoping-cart-item">
                                    <img className="shoping-cart-img" src={"http://localhost:3333" + id.image}></img>
                                    <div>
                                        <p className="shoping-cart-text">{id.title}</p>
                                        <div className="shoping-cart-button">
                                            <button onClick={() => dispatch(decrementCountAction(id.id))}>-</button>
                                                <p className="shoping-cart-value">{(id.count).toFixed(0)}</p>
                                            <button onClick={() => dispatch(incrementCountAction(id.id))}>+</button>
                                        </div>
                                    </div>
                                    <div className="shoping-cart-cost">
                                        <p className="shoping-cart-cost-with-sale">{(id.price * id.count).toFixed(2)}<span className="shoping-cart-cost-with-sale">$</span></p>
                                        <p className="shoping-cart-cost-without-sale"></p>
                                    </div>
                                    <p className="close" onClick={() => dispatch(deleteCartAction(id.id))}>X</p>
                                </li>
                            </ul>
                        </div>}
                        else {
                            return <div className="shoping-cart-content">
                            <ul className="shoping-cart-list">
                                <li className="shoping-cart-item">
                                    <img className="shoping-cart-img" src={"http://localhost:3333" + id.image}></img>
                                    <div>
                                        <p className="shoping-cart-text">{id.title}</p>
                                        <div className="shoping-cart-button">
                                            <button onClick={() => dispatch(decrementCountAction(id.id))}>-</button>
                                                <p className="shoping-cart-value">{(id.count).toFixed(0)}</p>
                                            <button onClick={() => dispatch(incrementCountAction(id.id))}>+</button>
                                        </div>
                                    </div>
                                    <div className="shoping-cart-cost">
                                        <p className="shoping-cart-cost-with-sale">{(id.discont_price * id.count).toFixed(2)}<span className="shoping-cart-cost-with-sale">$</span></p>
                                        <p className="shoping-cart-cost-without-sale">{(id.price * id.count).toFixed(2)}$</p>
                                    </div>
                                    <p className="close" onClick={() => dispatch(deleteCartAction(id.id))}>X</p>
                                </li>
                            </ul>
                        </div>
                        }})  
                    }
                </div>
                <div className="shoping-cart-order">
                    <p className="shoping-cart-order-title">Order details</p>
                    <div className="shoping-cart-order-total-cost">
                        <p className="shoping-cart-order-total">Total</p>
                        <p className="shoping-cart-order-cost">{total}$</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="tel" placeholder="Phone number" className="shoping-cart-order-input" {...register("phone", { required: true, minLength: 13, maxLength: 13})}></input>
                    {errors.phone?.type === 'minLength' && <p className="order-error">Поле должно быть 10 символов</p>}
                    {errors.phone?.type === 'maxLength' && <p className="order-error">Поле должно быть 10 символов</p>}
                    <button className="shoping-cart-order-button">Order</button>
                    </form>
                </div>   
            </div>
            
        </section>
    )
}

export default ShopingCart;