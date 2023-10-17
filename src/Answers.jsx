import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function Answers() {
    const nav=useNavigate();
    const [qns,setqns]=useState([]);
    const p=useLocation();
    console.log(p.state.qns)
    useEffect(()=>
  {
  
    setqns(p.state.qns);


  },[])
  return (
    <div className='container'>
      {qns.map((item, index) => {
            return(
          <div className="row container ans-container" key={index}>
          <h2>{item.question}</h2>
          <p>{item.correct_answer}</p>
           
          </div>
            )
})}
    </div>
  )
}
