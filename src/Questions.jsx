import {React,useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
export default function Questions() {
  const [qns,setqns]=useState([]);
  const p=useLocation();
  useEffect(()=>
  {
  
    setqns(p.state.res);


  },[])
    
   console.log(qns)
  return (
    <div>
      {qns.map((item, index) => {
            return(
          <div className="col-md" key={index}>
           {item.question}
          </div>
            )
})}
      
    </div>
  )
}
