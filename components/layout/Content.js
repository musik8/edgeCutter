import {Component, useEffect, useRef, useState} from 'react';
import Image from 'next/image'



export default function Content({ children, classes }) {
  

  return (
  <div className={`view-container ${classes}`}> 
   {children} 
  </div>
  
  )
}