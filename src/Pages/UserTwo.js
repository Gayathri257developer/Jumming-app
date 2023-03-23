import React from 'react'
import './Layout.css';
import video1 from '../assets/video-1.mp4'
import video2 from '../assets/video-3.mp4'

const UserTwo = () => {
  return (
    <div className='wrapper'>
     <div className='inner2'>
      <div className='user2 col-2'>
      <video src={video1} width="100%" height="100%" loop autoPlay>
      
    </video>
    <h2>John</h2>
      </div>
      <div className='user2 col-2'>
      <video src={video2} width="100%" height="100%" loop autoPlay>

    </video>
    <h2>alean</h2>
      </div>
     </div>
     
    </div>
  
  )
}

export default UserTwo