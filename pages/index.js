import Head from 'next/head'
import Image from 'next/image'
import {useRef, useState} from 'react';


import Popup from '../components/layout/Popup.js'
import Content from '../components/layout/Content.js'
import Left from '../components/layout/Left.js'
import Right from '../components/layout/Right.js'
import ModelMenu from '../components/ModelMenu.js'
import TextContent from '../components/TextContent.js'

import tempPic from '../public/ec-200-1100/gif1.gif'
import tempGif from '../public/images/giftest.gif'
import { useEffect } from 'react/cjs/react.production.min';

//EC-1100
import ec1100main from '../public/ec-200-1100/ec-1100-200.jpg'
import ec1000Gif1 from '../public/ec-200-1100/gif1.gif'
import ec1000Gif2 from '../public/ec-200-1100/gif2.gif'
import ec1000Gif3 from '../public/ec-200-1100/gif3.gif'


//EC400
import ec400Gif1 from '../public/ec400/gif1.gif'
import ec400Gif2 from '../public/ec400/gif2.gif'
import ec400 from  '../public/ec400/ec.jpg'
import ec400Settings from  '../public/ec400/ec400-settings-color.png'


//EC300
import ec300Gif1 from '../public/ec300/gif1.gif'
import ec300Gif2 from '../public/ec300/gif2.gif'
import ec300Gif3 from '../public/ec300/gif3.gif'
import ec300 from  '../public/ec300/ec.jpg'



import useIntersection from '../components/hooks/useIntersection.js'

export default function Home() {
  //Setup meta tags

 
  //menu items

  const model_0 = {
    id: 0,
    name: "EC-400 & EC-400W",
    picture: ec400,
    src: "https://www.youtube.com/embed/Bemm_F5OinA" ,
    options: [
      "Automatic Roll OD Detection",
      "Core Cutting"
    ],
    param: [
      {
        item: "Roll Width",
        value: "250 - 600mm"
      },
      {
        item: "Core Diameter",
        value: "76mm, 110mm, 152mm"
      },
      {
        item: "Roll Outer Diameter",
        value: "max 400mm"
      },
      {
        item: "Loading",
        value: "Front"
      },
      {
        item: "Unloading",
        value: "Front"
      },
      
      
    ]
  }
  const model_1 = {
    id: 1,
    name: "EC-200-1100",
    picture: ec1100main,
    src: "https://www.youtube.com/embed/OJzS40vWNsc" ,
    options: [
      "Trim take-away conveyor",
    ],
    param: [
      {
        item: "Roll Width",
        value: "280 - 1100mm"
      },
      {
        item: "Core Diameter",
        value: "76mm, 110mm, 152mm"
      },
      {
        item: "Roll Outer Diameter",
        value: "Max 254mm"
      },
      {
        item: "Loading",
        value: "Front"
      },
      {
        item: "Unloading",
        value: "Front"
      },
      
      
    ]
  }

  const model_2 = {
    id: 2,
    name: "EC-300AL",
    src: "https://www.youtube.com/embed/kqv2QqCMrWg" ,
    picture: ec300,
    options: [
      "Trim take-away conveyor",
    ],
    param: [
      {
        item: "Roll Width",
        value: "280 - 550mm"
      },
      {
        item: "Core Diameter",
        value: "76mm, 110mm, 152mm"
      },
      {
        item: "Roll Outer Diameter",
        value: "Max 300mm"
      },
      {
        item: "Loading",
        value: "Front"
      },
      {
        item: "Unloading",
        value: "Back"
      },
      {
        item: "Conveyor Capacity ",
        value: "10"
      },
      
      
      
    ]
  }
 
 
  
  


  let menuArray = [model_1, model_2,model_0]


  const [activeModel, setModel] = useState(null)




  const standardModel = useRef();
  const inViewport = useIntersection(standardModel, '-200px');
  //const standVisible = useOnScreen(standardModel)
 
  console.log(inViewport)
  // useEffect(() => {
  //   console.log("Is visible? ", inViewport)
  // }, [inViewport])


  

  return (
    <div className="container">
      
      <Head>
        <title>AGM Stretch Film Roll Edge Cutters</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        
        <meta name="description" content="AGM manufactures PVC, PE stretch film roll edge cutters"/>
        <meta name="keywords" content="PVC, PE, Edge, Cutter, Stretch Film"/>
        <meta name="author" content="AGM automation"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>


      {/* LANDING PAGE */}
      <Content>
        
        <Left>
        <div className="text-box no-space">
        <h2>AGM <br/> Automation <br/> <span className="subtext">Presents</span></h2>
    
          <h1>PVC & PE Stretch Film Roll Edge Cutters</h1>
        </div>
        <div className="text-box">
          <ul>
            <li onClick={()=> standardModel.current.scrollIntoView({ behavior: 'smooth' })} >Standard Models</li>
            <li onClick={()=> standardModel.current.scrollIntoView({ behavior: 'smooth' })} >Customize</li>
            <li onClick={()=> standardModel.current.scrollIntoView({ behavior: 'smooth' })} >Industries</li>
            <li onClick={()=> standardModel.current.scrollIntoView({ behavior: 'smooth' })} >Support</li>
            <li onClick={()=> standardModel.current.scrollIntoView({ behavior: 'smooth' })} >About Us & Contact</li>
          </ul>
        </div>
        </Left>
        <Right>

        <div className="col">
          <div className="row">
            
            <Image 
              className="col-image"
              src={ec1100main}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          
          </div>

          <div className="row">
              <div className="col">
            <p>
            We are pleased to present our line of EC-series automatic stretch film Edge Cutters. Designed and built in Canada, the Edge Cutters assure uninterrupted use in your facility. They trim automatically the sides of cling film rolls wound on paper cores, producing uniform, finished rolls with clean, burr-free, straight edges; centered on their cores, easy to unwind.

            </p>
            <p>
The knives realign to maintain equal protrusion of the core. The knives find their position automatically. All six axes' movements are controlled by PLC. All operation parameters are set on the touch screen monitor including final film width, core outer diameter, and roll's outer diameter.
            </p>
            </div>
          </div>
  

        </div>
        <div className="col">
          <div className="row">
            <Image 
              className="col-image"
              src={ec300Gif2}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          </div>
          <div className="row">
            <Image 
              className="col-image"
              src={ec1000Gif3}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          </div>

        </div>

        </Right>

      </Content>
      


      {/* STANDARD MODELS AREA */}
      <Content refs={standardModel} >
        <Left>
            <div  className="text-box">
              <h2>Standard Models </h2>
              <p>AGM currently manufactures several edge cutters that vary in features to fit your PVC or polyethylene edge trimming requirements.
</p>

              <p>
All the models are featured with 6 servo axes, fully digital settings, carbide knives, and more. Roll spinning, cutting speed, cutting trajectory (straight, spreading) and a multicut mode may be adjusted to get the best cut of the PVC roll. Film properties and rolls winding hardness may require different cutting parameters.  
These edge cutters are also suitable for side trimming of PVC shrink film and PE stretch film rolls.

              </p>
            </div>

        </Left>

        <Right classes="menuScreen">
          <ModelMenu data={menuArray} setModel={setModel} />
        </Right>

      </Content>

      {/* Model popup content */}

      <Popup activeModel={activeModel} setModel={setModel}>
  
      {/* EC-400 */}
        <Content classes="model-0 popup-item">
            <Left>
            <h2>{model_0.name}</h2>
            <div className="model-detail-container">
              <TextContent
                param={model_0.param}
                // name={model_0.name}
                options={model_0.options}
              />
            </div>

            <p>
            This machine can handle rolls of 280-550 mm wide and 120 mm to 400 mm outer diameter (OD) [up to 610 mm OD for EC-400W]. This machine can trim any problematic rolls with telescoping edges and core uneven protrusion. It can make multiple cuts until the roll edge gets perfect. The cycle time varies significantly depending on the roll OD and roll quality. Minimum cycle time is 30-35 sec. The model EC-400 has also the core cutting option as a part of the trimming cycle.

            </p>
            
         
            </Left>
            <Right>
            <div className="col full">
            <div className="row">
              <div className="col">
                  <Image 
                    className="col-image"
                    src={ec400}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="Edge Trimmer ec400"
                  />
              </div>
              <div className="col">
                <Image 
                    className="col-image"
                    src={ec400Gif1}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="ec400 roll edge trimmer in action"
                  />
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <Image 
                    className="col-image"
                    src={ec400Gif2}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="Edge Trimmer ec400"
                  />
              </div>
             
            </div>
            <div className="row">
              <div className="col">
                
                <Image 
                    className="col-image"
                    src={ec400Settings}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="EC400 settings"
                  />
               
              </div>
              
            </div>
            <div className="row">
              <div className="col full">
                <div className="video-wrapper">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={activeModel === model_0.id ? model_0.src: ""} 
                    title="YouTube video player" 
                    frameBorder="0" 
  
                    allowFullScreen>
                    
                  </iframe>
                </div>
              </div>
            </div>
            </div>
            </Right>
        </Content>

        {/* EC-200-1100 */}

        <Content classes="model-1 popup-item">
            <Left>
            <h2>{model_1.name}</h2>
            <div className="model-detail-container">
              <TextContent
                param={model_1.param}
                // name={model_0.name}
                options={model_1.options}
              />
            </div>

            <p>
            This machine is designed for trimming extra-wide rolls from 280 mm to 1030 mm and 120 – 200 mm OD. 

            </p>
            
            </Left>
            <Right>
            <div className="col full">
            <div className="row">
              <div className="col">
                  <Image 
                    className="col-image"
                    src={ec1100main}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
              <div className="col">
                <Image 
                    className="col-image"
                    src={ec1000Gif1}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <Image 
                    className="col-image"
                    src={ec1000Gif2}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
              <div className="col">
                <Image 
                    className="col-image"
                    src={ec1000Gif3}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
            </div>
            <div className="row">
              <div className="col full">
                <div className="video-wrapper">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={activeModel === model_1.id ? model_1.src: ""}
                    //src={model_1.src}
                    title="EC-1100-200 In Action" 
                    frameBorder="0" 
                   
                    allowFullScreen>
                    
                  </iframe>
                </div>
              </div>
            </div>
            </div>
            </Right>
        </Content>



               {/* EC-300AL */}

               <Content classes="model-2 popup-item">
            <Left>
            <h2>{model_2.name}</h2>
            <div className="model-detail-container">
              <TextContent
                param={model_2.param}
                // name={model_0.name}
                options={model_2.options}
              />
            </div>

            <p>
            This machine has loading and unloading conveyors with up to 10 roll capacity. 

            </p>
            
            </Left>
            <Right>
            <div className="col full">
            <div className="row">
              <div className="col">
                  <Image 
                    className="col-image"
                    src={ec300}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
              <div className="col">
                <Image 
                    className="col-image"
                    src={ec300Gif1}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <Image 
                    className="col-image"
                    src={ec300Gif2}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
              <div className="col">
                <Image 
                    className="col-image"
                    src={ec300Gif3}
                    width={1280}
                    height={720}
                    objectFit='cover'
                    alt="add meta information for pictures"
                  />
              </div>
            </div>
            <div className="row">
              <div className="col full">
                <div className="video-wrapper">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={activeModel === model_2.id ? model_2.src: ""}
                    //src={model_1.src}
                    title="EC-1100-200 In Action" 
                    frameBorder="0" 
                   
                    allowFullScreen>
                    
                  </iframe>
                </div>
              </div>
            </div>
            </div>
            </Right>
        </Content>

       
      </Popup>

      <Content>
        <Left>
          <div className="text-box">
            <h2>Industries</h2>
            <p>[What industries are the edge cutters used for?]</p>
            <p>[What kind of end products are there?]</p>
            <p>[What materials do the edge cutters process?]</p>
            <p>

            The edge cutter machines are used in many industries...
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ultricies dui, sed vehicula libero. Nunc ut sem ut est fringilla consectetur vel in purus. Vivamus eleifend risus eu egestas laoreet. Sed vitae lectus eget lectus egestas gravida ac vitae enim. Etiam tincidunt auctor justo ac faucibus. Praesent at tempor arcu. Proin quis elementum est. Vestibulum laoreet suscipit rutrum. Aenean a mauris quis libero convallis euismod. Aliquam eu sapien vitae purus malesuada sodales. Ut ut ex risus. Maecenas in lorem et arcu egestas ullamcorper. Nulla fermentum at ante at commodo. Morbi condimentum neque turpis, a lobortis nibh pharetra quis. Sed sed consequat lacus.
            </p>
          </div>
        </Left>

        <Right>

        </Right>
      </Content>

      <Content>
        <Left>
          <div className="text-box">
            <h2>Edge Cutter Support</h2>
            <p>
            [How will agm support the client??, besides selling the edge cutter blade]
            
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ultricies dui, sed vehicula libero. Nunc ut sem ut est fringilla consectetur vel in purus. Vivamus eleifend risus eu egestas laoreet. Sed vitae lectus eget lectus egestas gravida ac vitae enim. Etiam tincidunt auctor justo ac faucibus. Praesent at tempor arcu. Proin quis elementum est. Vestibulum laoreet suscipit rutrum. Aenean a mauris quis libero convallis euismod. Aliquam eu sapien vitae purus malesuada sodales. Ut ut ex risus. Maecenas in lorem et arcu egestas ullamcorper. Nulla fermentum at ante at commodo. Morbi condimentum neque turpis, a lobortis nibh pharetra quis. Sed sed consequat lacus.
           
            </p>
          </div>
        </Left>

        <Right>
          
        </Right>
      </Content>


      <Content>
        <Left>
          <div className="text-box">
            <h2>About AGM</h2>
            <p>
            AGM Automation Systems Inc. is an OEM and Systems Integration company with an extensive experience and unique know-how in industrial automation and turnkey engineered solutions for the industry.

We have over 20 years of experience... 
            </p>
          </div>
          <h4>Email Us
              <br/>
              <span className="subtext">info@agmautomation.com</span>
          </h4>
          <h4>Call Us
              <br/>
              <span className="subtext">416-628-5682</span>
          </h4>
          <h4>Our Location 
              <br/>
              <span className="subtext">info@agmautomation.com</span>
          </h4>
          
        </Left>

        <Right>
          
        </Right>
      </Content>




     

      </main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a> */}
      </footer>

      
      
    </div>
  )
}
