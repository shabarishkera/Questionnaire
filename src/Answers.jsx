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
  
    setqns(p.state.res);


  },[])
  return (
    <div>
      this is anwers page

      --show all the questions and its anwers
    </div>
  )
}
