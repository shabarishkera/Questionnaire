import {React,useContext,useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import QnBox from './QnBox'
import {context,Store} from './Store'

export default function Questions() {
  const [show,setshow]=useState(true)

  const nav=useNavigate();
  const [qns,setqns]=useState([]);
  const p=useLocation();
const {ans_no,setans_no}=useContext(context);
  const handlesubmit=()=>{
  //   if(ans_no!=30)
  //   {alert("Please Attend All Questions ");return;
  // }
  //nav('/answers',{state:{qns}});
if(show)
setshow(false);
else
setshow(true)



  }
  useEffect(()=>
  {
  
    setqns(p.state.res);


  },[])
    
   
  return (
    <>
    
    <div className='container '>
      {qns.map((item, index) => {
            return(
          <div className="col-md" key={index}>
<QnBox  index={index} show={show} obj={item} ans_no={ans_no} setans_no={setans_no}/>
           
          </div>
            )
})}

<button className='btn btn-primary h4 submit-btn my-5' onClick={handlesubmit}>{show?'show answer':'hide answers'}</button>
      
    </div>
    </>
  )
}
