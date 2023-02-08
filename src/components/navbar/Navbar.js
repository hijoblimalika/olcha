import React, {useState} from 'react'
import "./Navbar.css"
import { AiOutlineMenu} from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {BiBarChart} from "react-icons/bi"
import {SlBasket} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import { Link  } from 'react-router-dom'
import {FiX} from "react-icons/fi"

const NAVBAR_DATA = [
  {
    text: "Taqqoslash",
    icon: <BiBarChart/>
  },
  {
    text: "Sevimlilar",
    icon: <AiOutlineHeart/>
  },
  {
    text: "Savatcha",
    icon: <SlBasket/>
  },
  {
    text: "Kirish",
    icon: <BsPerson/>
  }

]



function Navbar() {
  const [ show, setShow ] = useState(false)
  document.body.style.overflow = show ? "hidden" : "auto"
  



  
  return (
  <>
    <div className="nav__container">
      <div className='container '>
          <div className="navbar">
            <Link 
            // contentEditable={true}
             to={"/"} className="nav__logo">NEW BREND </Link>
            <button className="btn nav__katalog">
              <AiOutlineMenu/>
              <span>katalog</span>
            </button>
            <div className="nav__search">
              <input type="text" placeholder='Qidirish...'/>
              <button><FiSearch/></button>
            </div>
            <div className="nav__items">

            <Link to={"/"} className="nav__item">
              <BiBarChart/>
              <p>Taqqoslash</p>
            </Link>

            <Link to={"/like"} className="nav__item">
              <AiOutlineHeart/>
              <p>Sevimlilar</p>
            </Link>

            <Link to={"/cart"} className="nav__item">
            <SlBasket/>
              <p>Savatcha</p>
            </Link>
            <div onClick={()=> setShow(true)} className="nav__item">
              
              <BsPerson/>
              <p>Kirish</p>

            </div>
            </div>
          
          </div>
      </div>
    </div>

    {
      show ? <>
    <div className="nav__shadow"></div>
    <div className="nav__login">
      <h1>Tizimga kirish yoki profil yaratish</h1>
    <p>Telefon raqami</p>
    <input type="text" placeholder='' />
      <FiX onClick={()=> setShow(false)} className='nav__close'/>
    </div>
    </>:
    <></>


    }


  </>
  )
}

export default Navbar