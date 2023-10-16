import {React,useContext,useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import QnBox from './QnBox'
import {context,Store} from './Store'

export default function Questions() {
  const nav=useNavigate();
  const [qns,setqns]=useState([]);
  const p=useLocation();
const {ans_no,setans_no}=useContext(context);
  const handlesubmit=()=>{
    if(ans_no!=30)
    {alert("Please Attend All Questions ");return;
  }
  nav('/answers',{state:{qns}});



  }
  useEffect(()=>
  {
  
    setqns(p.state.res);


  },[])
    
   
  return (
    <div className='container '>
      {qns.map((item, index) => {
            return(
          <div className="col-md" key={index}>
<QnBox  index={index} obj={item} ans_no={ans_no} setans_no={setans_no}/>
           
          </div>
            )
})}

<button className='btn btn-danger submit-btn' onClick={handlesubmit}>submit</button>
      
    </div>
  )
}
