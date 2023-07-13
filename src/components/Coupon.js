import "./Coupon.css";
import gnome from "../img/gnome-coupon.png"
import { useForm } from "react-hook-form";
import axios from 'axios';

function Coupon() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);

    // const onSubmit = (data) => axios({
    //     method: 'post',
    //     url: 'http://localhost:3333/sale/send',
    //     data: {data},
    //   });;
      
      const onSubmit = (data) => axios.post('http://localhost:3333/sale/send', {
        data
      })
      .then((response) => {
        console.log(response);
        console.log(data)
      }, (error) => {
        console.log(error);
      });

    // axios({
    //     method: 'post',
    //     url: '/login',
    //     data: {
    //       firstName: 'Finn',
    //       lastName: 'Williams'
    //     }
    //   });
    return (
        

        <section className="container coupon">
            <div><img className="coupon-img" src={gnome}></img></div>
            <div className="coupon-title">
                <p className="coupon-subtitle">5% off</p>  
                <p className="coupon-text">on the first order</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="tel" placeholder="+49" className="coupon-input" {...register("phone", { required: true, minLength: 13, maxLength: 13})}></input>
                    <br />
                    {errors.phone?.type === 'minLength' && <p>Поле должно быть 10 символов</p>}
                    {errors.phone?.type === 'maxLength' && <p>Поле должно быть 10 символов</p>}
                    <button className="coupon-button" type="submit">Get a discount</button>
                </form>
            </div>
        </section>
    )
}

export default Coupon;