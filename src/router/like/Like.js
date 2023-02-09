import React from 'react'
import "./Like.css"
import Empty from "../../components/empty/Empty"
import { useSelector } from 'react-redux'


    function Like() {
const like = useSelector(s=> s.heart)
console.log(like)
    return (
    <div className='container like'>
    {
    like.length === 0 ? <Empty url="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" text="Sevimli mahsulotlar yo'q"/>
    :
    <div>
    {
    like?.map((item, inx)=><div key={inx} className="like__card">
    <img className='like__imgs' src={item?.urls[0]} alt="" />
    <p className='two__title'>{item?.title}</p>
    <div className='two__container'>

    <del className='two'>
    {item?.price + 200} so'm</del>
    <br />
    <p className='two2'>{item?.price} so'm</p>
    </div>

    <div className='like__btn'>
    <button className='like__btn2'>savatchaga qoshish</button>
    <button className='like__btn3'>O'chirish</button>
    </div>
    </div>)
    }
    </div>
    }
    </div>

    )
    }
    export default Like