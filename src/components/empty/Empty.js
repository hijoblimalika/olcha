import React from 'react'
import "./Empty.css"

function Empty(p) {
  return (
    <div className='empty'>
        <img src={p?.url} alt="" />
        <h2>{p?.text}</h2>
    </div>
  )
}

export default Empty