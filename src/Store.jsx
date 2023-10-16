import { createContext, useState } from "react";
import React from 'react'
export const context=createContext();



export default function Store(props) {
    const [ans_no,setans_no]=useState(0);
  return (
   <context.Provider value={{ans_no,setans_no}}>
    {props.children}
    </context.Provider>
  )
}
