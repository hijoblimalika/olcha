// import React from 'react'
// import Empty from '../../components/empty/Empty'
// import { Link, useParams } from 'react-router-dom'

// import "./Like.css"
// import { useSelector } from "react-redux"
// import heart from '../../context/reducer/heart'

// function Like() {
//   const like = useSelector(s => s.heart)
//   console.log(like);

//   return (
//     <div className='container like'>

//       {
//         like.length === 0 ?
//         <Empty url="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" text="Sevimli mahsulotlar yo'q"/>

//         :
        
//         <div className="like__idiw">
//           <div className="like__quticha">
//             <div className="like__quticha__img">

//             <img src={like?.[0]?.urls?.[0]} alt="" />
//             <h1>{like?.[0]?.title}</h1>
//             </div>
//             <div className="like__qutica__price">

//             <b>{like?.[0]?.price} So'm</b>
//             </div>
//             <div className="like__qutica__btn">
//               <button className="like__qutica__btns1">Savatchaga qo'shish</button>
//               <br />
//               <button className="like__qutica__btns2">O'chirish</button>
//             </div>
            
//           </div>
          
//         </div>
//       }
      
//     </div>
//   )
// }

// export default Like




import React from 'react'
import "./Like.css"
import Empty from "../../components/empty/Empty"
import { Link, useSelector } from 'react-redux'


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
<p>{item?.title}</p>
<div>

<del className='pwort'>
{item?.price + 200} so'm</del>
<br />
<p className='tanlangan__narxi'>{item?.price} so'm</p>
</div>

<button></button>
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
