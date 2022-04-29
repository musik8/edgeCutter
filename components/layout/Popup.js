import {gsap} from 'gsap'
import {useRef, useEffect } from 'react';
export default function Popup({ children, classes, activeModel, setModel }) {
  
  const openAnimation = useRef();
  const popup = useRef();
  const subObj = gsap.utils.selector(popup);
  
  let open = false; 

  useEffect(()=> {
    if(activeModel !== null) {
     // openAnimation.current.resume();
    

       openItem();
      console.log("ActiveModel: ",activeModel)

    }
    

  }, [activeModel])


  const openItem = () => {
    
    let targetClass = ".model-" + activeModel;

    gsap.to(subObj(targetClass), {
      display: "flex",
      
    })

    gsap.to(popup.current, {
      alpha: 1,
      pointerEvents: "auto" ,
      duration: 1,
      y: "0%",
      delay: 0.5
    } )

  
 
   

    gsap.to("body", {overflow: "hidden"})
    //gsap.to(subObj("model-" + activeModel), {})
  }

  const closeItem = () => {
    let targetClass = ".model-" + activeModel;

    gsap.to(popup.current, {
      alpha: 0,
      pointerEvents: "none" ,
      y: "100%",
      duration: 1} )

    gsap.to(subObj(targetClass), {
      display: "none",
      delay: 1,
    } )  

    gsap.to("body", {overflow: "auto"})
    setModel(null)
    //gsap.to(subObj("model-" + activeModel), {})
  }
 

  return (
  <div ref={popup} className={`popup-container ${classes}`}> 
   {children} 
   <div className="close-button" onClick={() => closeItem()}>Close</div>
  </div>
  
  )
}