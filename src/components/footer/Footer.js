import React from 'react'
import "./Footer.css"
import gallery from "../../assets/appGalareya.svg"
import AppStore from "../../assets/appStore.svg"
import PlayMarket from "../../assets/playMarket.svg"
import foTel from "../../assets/fo__tel.webp"
import focarta from "../../assets/focarta.png"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"


function Footer() {
  return (
    <div className='footer'>
   <div className="footer__container">
    <div className="footer__box1">
        <h1>Наше мобильное приложение доступно в AppGallery, App store и Google play</h1>

        <div className="footer__box2">
        <div className="footer__box2_2">
        <img className='appstr' src={AppStore} alt="" />
        <img className='plymar' src={PlayMarket} alt="" />
                </div>  
         <img className='fo__galarey' src={gallery} alt="" />  
        </div>
    </div>
    <div className="footer__box1">
        <img className='fotell' src={foTel} alt="" />
    </div>
   </div>
   <div className="fo__ciziq"></div>
   <div className="footer__container2">
    <div className="foter__box1">
        <h1>olcha</h1>
        <p>Телефон поддержки</p>

        <h3>+998902606472</h3>
        <p>  Козитарнов, Ташкент</p>
        <p>info@olcha.uz</p>

    </div>
    <div className="foter__box2">
        <h1>Информация</h1>
        <p>О компании</p>
        <p>Вакансии</p>
        <p>Возврат и обмен товаров</p>
        <p>Условия рассрочки</p>
        <p>Помощь</p>
        <p>Доставка</p>
    </div>
    <div className="foter__box3">
        <p>Eco-friendly</p>
        <p>Бонусы и акции</p>
        <p>Оплата и доставка</p>
        <p>Продавайте на olcha</p>
        <p>Сервисные центры</p>
    </div>
    <div className="foter__box4">
      
     <img src={focarta} alt="" />
    </div>
     
   </div>
   <hr className='ciziq2' />
   <div className="footer__container3">
    <div className="foter3__1"> <p>© 2017-2022. ООО "Olcha store</p> </div>
    <div className="foter3__1"> <p className='pl'>Публичная оферта</p> </div>
    <div className="foter3__1"> <p className='pl'>Политика конфиденциальности</p> </div>
    <div className="foter3__icon">
        <BsFacebook/>
        <AiOutlineInstagram/>
        <FaTelegramPlane/>
    </div>
   </div>
    </div>
  )
}

export default Footer