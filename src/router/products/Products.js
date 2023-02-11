import React from 'react'
import { PRODUCTS } from "../../static"
import { Link } from 'react-router-dom'
import "./Products.css"
import {AiOutlineHeart, AiFillHeart } from "react-icons/ai" 
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_LIKE, REMOVE_LIKE } from "../../context/action/actionType"


function Products() {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)
  const cart = useSelector(s=> s.cart)
  console.log(cart);
  
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if (index > -1) {
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }

  const addToCart = (item) =>{
    console.log(item);
  }
  
  return (
    <div className="container">

    <div className='products'>
        {
            PRODUCTS?.map((item, inx)=> <div  key={inx} className="product__item">
              <div  className='pro__heart'>
                {
                  likes?.some(i => i.id === item.id ) ?
                  
                  <AiFillHeart style={{color:"red"}} onClick={()=> dispatch({type:REMOVE_LIKE, paylod: item.id})}/> : 
                  <AiOutlineHeart onClick={()=> addHeart(item)}/>
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
                <button onClick={()=> addToCart(item)} className='pro__cart'>Add to Cart</button>
            </div>)
        }
    </div>
    </div>
  )
}

export default Products