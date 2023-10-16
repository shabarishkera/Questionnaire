import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Questions() {
    const p=useLocation();
    console.log(p.state.res)
  return (
    <div>
        this is quesits page
      
    </div>
  )
}
