import {Component, useEffect, useRef, useState} from 'react';
import Image from 'next/image'



export default function Content({ children, classes, refs, navView }) {
  
 if(navView === undefined) {
  navView= true;
 }
  const [naved, setNaved] = useState(false)

  if(!naved)
  if(navView) {
    setNaved(true)
    console.log("Naved ",naved)
  }
  
 

  return (
  <div ref={refs} className={`view-container ${classes} ${naved?"active-view" :""}`}> 
   {children} 
  </div>
  
  )
}