import {Component, useEffect, useRef, useState} from 'react';
import Image from 'next/image'



export default function Content({ children, classes, refs }) {
  

  return (
  <div ref={refs} className={`view-container ${classes}`}> 
   {children} 
  </div>
  
  )
}