import React from 'react'
import '../Components/Layout/Layout.css';

const UserOne = () => {
  return (
      <div className='wrapper'>
      <div className='inner'>
      <div className='col'>
      <video controls className='video1'>
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" loop autoPlay/>
      </video>
      <h2 className='name1'>you</h2>
      </div>
      </div>
      </div>
 
    
  )
}

export default UserOne