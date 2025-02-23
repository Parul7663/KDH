import React, { useState } from 'react'
import './style.css'
import { BsFillCartPlusFill } from "react-icons/bs";
const data = [
    {
        imgUrl : 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/oreo.jpg',
        name : 'oreo',
        price : 20,
        addtoCart:true,
        cartQty : 5
    },
    {
        imgUrl : 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/lays-potato-chips.jpg',
        name : 'yellow lays',
        price : 30,
        addtoCart:true,
        cartQty : 5
    },
    {
        imgUrl : 'https://cdn.pickuplimes.com/cache/96/d4/96d4ed30780e8375fca8990937c8e8f8.jpg',
        name : 'tahini',
        price : 120,
        addtoCart:true,
        cartQty : 5
    },
    {
        imgUrl : 'https://cityfarm.in/assets/products/2/3/large/Groceries_AttaFloursSooji_FortuneChakkiFreshAtta.png',
        name : 'white flour',
        price : 1020,
        addtoCart:true,
        cartQty : 5
    },
    {
        imgUrl : 'https://swagatgrocery.com/wp-content/uploads/2020/12/single.png',
        name : 'maggie',
        price : 14,
        addtoCart:true,
        cartQty : 5
    },

]
const Dashboard = ()=> {
    const [products,setProduct] = useState(data)
  return (
    <div className='list'>
        {products.map((item,index)=>{
           return( <ProductCart item = {item} key={index}/>)
        })}
    </div>
  )
}
const ProductCart = (props) => {
    return(
        <div className = 'card'>
            <img src = {props.item.imgUrl} alt="" className='img'/>
            <div className='productdetails'>
            <p>${props.item.price}</p>
            {/* <button className='btn'>Add</button> */}
            <br/>
            {/* <h1>{props.item.cartQty}</h1> */}
            {(props.item.addtoCart)? <CartBtn qty={props.item.cartQty}/>:<button className='btn'>Add</button>}
            </div>
        </div>
    )
}
const   CartBtn = ({qty}) =>(
    <div className='cartBtn'>
        <BsFillCartPlusFill>
            <p>{qty}</p>
        </BsFillCartPlusFill>
    </div>
)
 export default Dashboard;