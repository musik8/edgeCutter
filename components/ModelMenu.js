import {Component, useEffect, useRef, useState} from 'react';
import Image from 'next/image'
import TextContent from './TextContent';

import tempPic from '../public/images/edgeCutter.jpg'


export default function ModelMenu({ children, data, setModel }) {
  
  let modelArray = []
  for(const item of data) {
//  let modelMenuItem = ;


    modelArray.push
    (<div className="menu-item" onClick={() => setModel(item.id)} key={item.name}>
       <div className="image-content">
          <div className="still-image">
            <Image 
                src={tempPic}
                layout="fill"
                alt="add meta information for pictures"
                objectFit='cover'
              />
          </div>
          <div className="gif-image">

          </div>
       </div>
      <TextContent
        param={item.param}
        name={item.name}
        options={item.options}
      />

    </div>)
  }



  

  return (
  <>
  <div className="menu-container">
  {modelArray}
  </div>
  </>
   
  )
}