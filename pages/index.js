import Head from 'next/head'
import Image from 'next/image'
import {useRef, useState} from 'react';


import Popup from '../components/layout/Popup.js'
import Content from '../components/layout/Content.js'
import Left from '../components/layout/Left.js'
import Right from '../components/layout/Right.js'
import ModelMenu from '../components/ModelMenu.js'
import TextContent from '../components/TextContent.js'

import tempPic from '../public/images/edgeCutter.jpg'
import tempGif from '../public/images/giftest.gif'

export default function Home() {
  //Setup meta tags




  //menu items

  const model_0 = {
    id: 0,
    name: "EC-300",
    options: [
      "Automatic Roll OD Detection",
      "Core Cutting"
    ],
    param: [
      {
        item: "Roll Width",
        value: "250 - 500mm"
      },
      {
        item: "Core Diameter",
        value: "76mm, 110mm, 152mm"
      },
      {
        item: "Roll Outer Diameter",
        value: "300mm"
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
    name: "EC-400",
    options: [
      "Automatic Roll OD Detection",
      "Core Cutting"
    ],
    param: [
      {
        item: "Roll Width",
        value: "250 - 500mm"
      },
      {
        item: "Core Diameter",
        value: "76mm, 110mm, 152mm"
      },
      {
        item: "Roll Outer Diameter",
        value: "300mm"
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
 
  
 

  let menuArray = [model_0,model_1]


  const [activeModel, setModel] = useState(null)







  return (
    <div className="container">
      
      <Head>
        <title>AGM Industrial Edge Cutter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        <meta name="author" content="John Doe"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>


      {/* LANDING PAGE */}
      <Content>
        
        <Left>
        <h2>AGM <br/> Automation <br/> <span className="subtext">Presents</span></h2>
    
    <h1>Industrial Roll <br/> Edge Cutters</h1>

        </Left>
        <Right>

        <div className="col">
          <div className="row">
            
            <Image 
              className="col-image"
              src={tempGif}
              width={1280}
              height={720}
              alt="add meta information for pictures"
            />
          
          </div>

          <div className="row">
              <div className="col">
            <p>
            We are pleased to present our line of EC-series automatic Edge Cutters. Designed and built in Canada, the Edge Cutters assure uninterrupted use in your facility. They trim automatically the sides of cling film rolls wound on paper cores, producing uniform, finished rolls with clean, burr-free, straight edges; centered on their cores, easy to unwind. 
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

        </Right>

      </Content>
      


      {/* STANDARD MODELS AREA */}
      <Content>
        <Left>
            <div className="text-box">
              <h2>Standard Models</h2>
              <p>
              We are pleased to present our line of EC-series automatic Edge Cutters. Designed and built in Canada, the Edge Cutters assure uninterrupted use in your facility. They trim automatically the sides of cling film rolls wound on paper cores, producing uniform, finished rolls with clean, burr-free, straight edges; centered on their cores, easy to unwind. 
              </p>
            </div>

            <div className="text-box">
              <h2>Customize Industrial <br/> Roll Edge Cutters </h2>
              <p>
              We are pleased to present our line of EC-series automatic Edge Cutters. Designed and built in Canada, the Edge Cutters assure uninterrupted use in your facility. They trim automatically the sides of cling film rolls wound on paper cores, producing uniform, finished rolls with clean, burr-free, straight edges; centered on their cores, easy to unwind. 
              </p>
            </div>
       
        </Left>

        <Right classes="menuScreen">
          <ModelMenu data={menuArray} setModel={setModel} />
        </Right>

      </Content>

      {/* Model popup content */}

      <Popup activeModel={activeModel} setModel={setModel}>
  

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
            This machine has loading and unloading conveyors with up to 6 roll capacity. This machine can trim rolls from 120 mm to 280 mm OD and 280-550 mm wide. The cycle time is about 15-25 sec.
            </p>
            
            </Left>
            <Right>
            <div className="col full">
            <div className="row">
              <div className="col">
             
                  <Image 
                    className="col-image"
                    src={tempPic}
                    width={1280}
                    height={720}
                    alt="add meta information for pictures"
                  />
               
              </div>

              <div className="col">
               
                <Image 
                    className="col-image"
                    src={tempPic}
                    width={1280}
                    height={720}
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
                    src="https://www.youtube.com/embed/kqv2QqCMrWg" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                    
                  </iframe>

                </div>
              </div>
            </div>
            </div>
            </Right>
        </Content>

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
            This machine has loading and unloading conveyors with up to 6 roll capacity. This machine can trim rolls from 120 mm to 280 mm OD and 280-550 mm wide. The cycle time is about 15-25 sec.
            </p>
            
            </Left>
            <Right>
            <div className="col full">
            <div className="row">
              <div className="col">
             
                  <Image 
                    className="col-image"
                    src={tempPic}
                    width={1280}
                    height={720}
                    alt="add meta information for pictures"
                  />
               
              </div>

              <div className="col">
               
                <Image 
                    className="col-image"
                    src={tempPic}
                    width={1280}
                    height={720}
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
                    src="https://www.youtube.com/embed/kqv2QqCMrWg" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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
