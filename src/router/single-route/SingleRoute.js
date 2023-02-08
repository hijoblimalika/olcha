import React from 'react'
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../../static"
import "./SingleRoute.css"
function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS?.find(el => el.id === params.id)

    if(!oneItem){

        return <div> <h2>Malumot topilmadi</h2></div>

    }
  return (
    <div className='container'>
        <div className="opwi__singleroute">
            <div className="opwi__singleroute1">

         <h1>{oneItem?.title}</h1>
         <div className="singicons">
         <div>{oneItem?.singicon}</div>
         <div>{oneItem?.singicon}</div>
         <div>{oneItem?.singicon}</div>
         <div>{oneItem?.singicon}</div>
         <p>2 ta sharhlar</p>

         </div>
        <div className="singrimg">

        <img src={oneItem?.urls?.[0]} alt="" />
        </div>
        <div className="singrimg2">
        <img src={oneItem?.urls?.[1]} alt="" />
        <img src={oneItem?.urls?.[2]} alt="" />
        <img src={oneItem?.urls?.[3]} alt="" />

        </div>
            </div>
            <div className="opwi__singleroute2">
                <div className="xotire__single">
                    <p>{oneItem?.xotira}</p>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[0]}</button>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[1]}</button>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[2]}</button>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[3]}</button>
                </div>
                <div className="rangi__single2">
                    <p>Rangi :</p>
                    <button className="singbtn1">{oneItem?.ranglar?.[0]}</button>
                    <button className="singbtn1">{oneItem?.ranglar?.[1]}</button>
                    <button className="singbtn1">{oneItem?.ranglar?.[2]}</button>
                    <button className="singbtn1">{oneItem?.ranglar?.[3]}</button>
                </div>
                <div className="desc__single3">
                    <p>{oneItem?.desc?.[0]}</p>
                    <p>{oneItem?.desc?.[1]}</p>
                    <p>{oneItem?.desc?.[2]}</p>
                    <p>{oneItem?.desc?.[3]}</p>
                    <p>{oneItem?.desc?.[4]}</p>
                    <p>{oneItem?.desc?.[5]}</p>
                    <p>{oneItem?.desc?.[6]}</p>
                    <p>{oneItem?.desc?.[7]}</p>
                    <p>{oneItem?.desc?.[8]}</p>
                </div>
            </div>
            
            <div className="opwi__singleroute3">
                <div className="opwi__singcard1">
                    <div className="singcard__som">
                        <p>{oneItem?.singcard?.[0]}</p>
                        <del>{oneItem?.singcard?.[1]}</del>
                    </div>
                    <div className="sing__yetkazish">
                        <p>{oneItem?.singcard?.[2]}</p>
                        <br />
                        <b>{oneItem?.singcard?.[3]}</b>
                    </div>
                    <div className="sing_styetkazish">

                        <p>{oneItem?.singcard?.[4]}</p>
                    </div>
                    <button className="sing_savatgabtn">{oneItem?.singcard?.[5]}</button>
                    <button className="sing_savatgabtn1">{oneItem?.singcard?.[6]}</button>
                </div>
                <div className="opwi__singcard2">
                    <p>{oneItem?.muddatlitolov?.[0]}</p>
                    <br />
                    <b>{oneItem?.muddatlitolov?.[1]}</b>
                    <div className="singcardopwi2__btn">

                    <button className="singcard__btn1">{oneItem?.muddatlitolov?.[2]}</button>
                    <button className="singcard__btn2">{oneItem?.muddatlitolov?.[3]}</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="opwi__singleroute2 yoq3">
                <div className="xotire__single">
                    <p>{oneItem?.xotira}</p>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[0]}</button>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[1]}</button>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[2]}</button>
                    <button className='singbtn'>{oneItem?.xotiraxajmi?.[3]}</button>
                </div>
                <div className="rangi__single2">
                    <p>Rangi :</p>
                    <button className="singbtn1">{oneItem?.ranglar?.[0]}</button>
                    <button className="singbtn1">{oneItem?.ranglar?.[1]}</button>
                    <button className="singbtn1">{oneItem?.ranglar?.[2]}</button>
                    <button className="singbtn1">{oneItem?.ranglar?.[3]}</button>
                </div>
                <div className="desc__single3">
                    <p>{oneItem?.desc?.[0]}</p>
                    <p>{oneItem?.desc?.[1]}</p>
                    <p>{oneItem?.desc?.[2]}</p>
                    <p>{oneItem?.desc?.[3]}</p>
                    <p>{oneItem?.desc?.[4]}</p>
                    <p>{oneItem?.desc?.[5]}</p>
                    <p>{oneItem?.desc?.[6]}</p>
                    <p>{oneItem?.desc?.[7]}</p>
                    <p>{oneItem?.desc?.[8]}</p>
                </div>
            </div>
    </div>
  )
}

export default SingleRoute