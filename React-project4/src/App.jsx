import { useState } from 'react'

import './App.css'
import Right from "./Right.jsx"
import Search from "./Search.jsx"
import Card from "./Card1.jsx"
import Card2 from "./Card2.jsx"
import image from "./assets/earth.jfif"
import image2 from "./assets/avengers.jfif"
import image3 from "./assets/earth.jfif"
import image4 from "./assets/punisher.jfif"
import image5 from "./assets/punisher2.jfif"
import image6 from "./assets/women.jfif"
import image7 from "./assets/iron.jfif"
import image8 from "./assets/apo.jfif"
import image9 from "./assets/the mist.jfif"
import image10 from "./assets/Last chance.jfif"

function App() {
 

  return (
    <>
      <div id="app">
          <div id="right-component" >
            <Right 
            
            />
          </div>
          
        <div>
          <Search/>
          <div className="word">Trending</div>
         <div id="upper-img">
            <Card
            img={image}
            date="2019"
            title="REVENGERS"
            
            />
            <Card
            img={image2}
            date="2018"
            title="TEENWOLF"
            />
            <Card
            img={image3}
            date="2017"
            title="SHAKA"
            />
            
         </div>
         <div className="word">Recommened for you</div>
         <div id="Lower-img">
           
            <Card2
            img={image4}
            date="2000"
            title="SHAKA"
            />
            <Card2
            img={image5}
            date="2010"
            title="PUNISHER"
            />
            <Card2
            img={image2}
            date="2019"
            title="THE MIST"
            />
            <Card2
            img={image6}
            date="2003"
            title="THE WAR"
            />

         
           
            <Card2
            img={image7}
            date="1999"
            title="MACHINARY"
            />
            <Card2
            img={image8}
            date="2022"
            title="EXPNDABLES"
            />
            <Card2
            img={image9}
            date="2023"
            title="SPIDER"
            
            />
            <Card2
            img={image10}
            date="2011"
            title="LAST DAYS"
            />
            <Card2
            img={image10}
            date="2011"
            title="LAST DAYS"
            />
            
          </div>
         
        </div>
       
      </div>
      
      
    </>
  )
}

export default App
