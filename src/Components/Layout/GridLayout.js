import React from "react";
import './Layout.css';

const GridLayout = () => {

  return (
      <div className="wrapper">
    
      <div className="inner">
      <div className="col">
        <video controls className="video">
          <source src= "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" loop autoPlay />
        </video>
        <h2 className="name1"> You</h2>
      </div>
      </div>
      <div className="inner">
      <div className="col">
        <video controls className="video">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" loop autoPlay />
        </video>
        <h2 className="name1"> Ellen</h2>
      </div>
      </div>
      <div className="inner">
      <div className="col">
        <video controls className="video">
          <source src= "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" loop autoPlay />
        </video>
        <h2 className="name1"> John</h2>
      </div>
      </div>
      <div className="inner">
      <div className="col">
        <video controls className="video">
          <source src= "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" loop autoPlay />
        </video>
        <h2 className="name1">Peter</h2>
      </div>
    </div>
    </div>
    
    
  
   
  
    
  )
}

export default GridLayout