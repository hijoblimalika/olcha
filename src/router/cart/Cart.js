import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Cart.css"
import photo from "../../assets/catr.png"

function Cart() {
  return (
    <div className='container cart'>
    <Empty url={photo} text="Sevimli mahsulotlar yo'q"/>

    </div>
  )
}

export default Cart