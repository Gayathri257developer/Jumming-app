import React from 'react'
import './Layout.css';
import video1 from '../assets/video-1.mp4'
import video2 from '../assets/video-3.mp4'

const UserTwo = () => {
  return (
    <div className='wrapper'>
     <div className='inner3'>
      <div className='user3 col-1'>
      <video src={video1} className="video" width="400px" height="100%" loop autoPlay>

      </video>
      </div>
      <div className='user3 user-2 col-1'>
      <video src={video1} className="video" width="400px" height="100%" loop autoPlay>

      </video>
      </div>
      <div className='user3 col-3'>
      <video src={video2}  width="400px" height="100%" loop autoPlay>

      </video>
      </div>
     </div>
     
    </div>
  
  )
}

export default UserTwo