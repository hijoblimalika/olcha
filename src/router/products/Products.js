import React from 'react'
import { PRODUCTS } from "../../static"
import { Link } from 'react-router-dom'
import "./Products.css"
import {AiOutlineHeart} from "react-icons/ai" 
import { useDispatch } from "react-redux"
import { ADD_TO_LIKE } from "../../context/action/actionType"

function Products() {
  const dispatch = useDispatch()
  return (
    <div className="container">

    <div className='products'>
        {
            PRODUCTS?.map((item, inx)=> <div  key={inx} className="product__item">
              <AiOutlineHeart onClick={()=> dispatch({type:ADD_TO_LIKE, payload: item})} className='pro__heart'/>
              <Link to={`/products/${item.id}`}>
                <img src={item?.urls?.[0]} alt="" />
              
              </Link>
                <p className='p'>{item?.title}</p>
                <br />
                <br />
                <br />
                <b >{item?.price} So'm</b>
                <div className="mtolov">
                  <div>{item?.muddatlitolov?.[1]}</div>
                </div>
                <button className='pro__cart'>Add to Cart</button>
            </div>)
        }
    </div>
    </div>
  )
}

export default Products