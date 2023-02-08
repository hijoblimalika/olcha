import React from 'react'
import {PRODUCTS} from "../../static"
import { Link } from 'react-router-dom'


function Product() {
  return (
    <div className='product'>
        {
            PRODUCTS?.map((item, inx)=> <Link to={"/"} key={inx} className="product__item">
                <img src={item.urls[0]} alt="" />
                <p>{item.title}</p>
                <p>{item.price} so'm</p>
                <del>{Math.floor(item.price / 12)} so'm</del>
                <button>Cart</button>
            </Link>)
        }
    </div>  )
}

export default Product