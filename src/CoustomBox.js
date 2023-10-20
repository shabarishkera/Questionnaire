import React from 'react';
import { useNavigate } from 'react-router-dom';
import {mapping } from './Mapp'
const CustomBox = ({title, color }) => {
  const nav=useNavigate();
  const handleclick=async()=>{
   var res= await fetch(`https://opentdb.com/api.php?amount=30&category=${mapping[title]}&type=multiple`)
    res=await res.json();
    res=res.results;
    nav('/questions', { state: { res:res } });

  }
  const boxStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    background: `linear-gradient(to bottom right, ${color}, #FFFFFF)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    margin:'10px',
    padding:'20px'
  };

  return (
    
    <div onClick={handleclick} style={boxStyle}>
      {title}
    </div>
  );
};

export default CustomBox;
