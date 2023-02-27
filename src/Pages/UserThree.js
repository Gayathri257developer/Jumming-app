import React from 'react'
import '../Components/Layout/Layout.css';

const UserThree = () => {
  return (
   
    <div className='inner-3'>
     <div className='col'>
     <video controls className='video2'>
     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" loop autoPlay/>
     </video>
     <h2 className='name1'>you</h2>
     </div>

     <div className='col'>
     <video controls className='video-tag'>
     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" loop autoPlay/>
     </video>
     <h2 className='name1'>Ellen</h2>
     </div>
   
     <div className='col'>
     <video controls className='video-tag'>
     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" loop autoPlay/>
     </video>
     <h2 className='name1'>John</h2>
     </div>
    </div>
  
 
  )
}

export default UserThree