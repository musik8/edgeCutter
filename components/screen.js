import {Component, useEffect, useRef, useState} from 'react';
import Image from 'next/image'

import tempPic from '../public/images/edgeCutter.jpg'

export default function ScreenItem({ children }) {
  

  return (
  <div className="view-container"> 
   
    <div className="left-side">
     
      <h2>AGM <br/> Automation <br/> <span className="subtext">Presents</span></h2>
    
      <h1>Industrial Roll <br/> Edge Cutters</h1>
   
     
    </div>

    <div className="right-side">
        <div className="col">
          <div className="row">
            
            <Image 
              className="col-image"
              src={tempPic}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          
          </div>

          <div className="row">
            <p>
            We are pleased to present our line of EC-series automatic Edge Cutters. Designed and built in Canada, the Edge Cutters assure uninterrupted use in your facility. They trim automatically the sides of cling film rolls wound on paper cores, producing uniform, finished rolls with clean, burr-free, straight edges; centered on their cores, easy to unwind. 
            </p>
            <p>
The knives realign to maintain equal protrusion of the core. The knives find their position automatically. All six axes' movements are controlled by PLC. All operation parameters are set on the touch screen monitor including final film width, core outer diameter, and roll's outer diameter.
            </p>
          </div>
  

        </div>

        <div className="col">
          <div className="row">
            <Image 
              className="col-image"
              src={tempPic}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          </div>
          <div className="row">
            <Image 
              className="col-image"
              src={tempPic}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          </div>

        </div>




    </div>



  </div>
  
  )
}