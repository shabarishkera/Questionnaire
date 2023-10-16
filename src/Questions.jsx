import {React,useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import QnBox from './QnBox'
export default function Questions() {
  const [qns,setqns]=useState([]);
  const p=useLocation();
  useEffect(()=>
  {
  
    setqns(p.state.res);


  },[])
    
   
  return (
    <div>
      {qns.map((item, index) => {
            return(
          <div className="col-md" key={index}>
<QnBox obj={item}/>
           
          </div>
            )
})}
      
    </div>
  )
}
