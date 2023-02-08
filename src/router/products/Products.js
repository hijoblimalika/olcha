import React from 'react'
import { PRODUCTS } from "../../static"
import { Link } from 'react-router-dom'
import "./Products.css"
import {AiOutlineHeart, AiFillHeart } from "react-icons/ai" 
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_LIKE } from "../../context/action/actionType"

function Products() {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)
  
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if (index > -1) {
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }
  return (
    <div className="container">

    <div className='products'>
        {
            PRODUCTS?.map((item, inx)=> <div  key={inx} className="product__item">
              <div onClick={()=> addHeart(item)} className='pro__heart'>
                {
                  likes?.some(i => i.id === item.id ) ? <AiFillHeart/> : <AiOutlineHeart/>
                }
              </div>

              <div>

              </div>
              <Link to={`/products/${item.id}`}>
                <img src={item?.urls?.[0]} alt="" />
              
              </Link>
                <p className='pro__title'>{item?.title}</p>
                <br />
                <br />
                <br />
                <b >{item?.price} So'm</b>
                <div className="mtolov">
                  <div className='mtolov2'>{item?.muddatlitolov?.[1]}</div>
                </div>
                <button className='pro__cart'>Add to Cart</button>
            </div>)
        }
    </div>
    </div>
  )
}

export default Products