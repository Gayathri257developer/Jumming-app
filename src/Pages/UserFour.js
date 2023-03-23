import React from "react";
import './Layout.css';
import video1 from '../assets/video-1.mp4'
import video2 from '../assets/video-3.mp4'

const UserFour = () => {

  return (
      <div className="wrapper">
    
      <div className="inner">
      <div className="col col-1">
      <video src={video1} className="video" width="400px" height="100%" loop autoPlay>

      </video>
     
      </div>
      <div className="col col-2">
      <video src={video2} width="100%" height="100%" loop autoPlay>

      </video>
      
      </div>
      <div className="col col-3">
      <video src={video1} width="100%" height="100%" loop autoPlay>

      </video>
     
      </div>
      <div className="col col-4">
      <video src={video2} width="100%" height="100%" loop autoPlay>

      </video>
      
      </div>
    </div>
    </div>
    
    
  
   
  
    
  )
}

export default UserFour