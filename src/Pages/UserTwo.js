import React from 'react'
import '../Components/Layout/Layout.css';

const UserTwo = () => {
  return (
    <div className='wrapper'>
    
     <div className='col'>
     <video controls className='video2'>
     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" loop autoPlay/>
     </video>
     <h2 className='name1'>you</h2>
     </div>
  
     <div className='col'>
     <video controls className='video2'>
     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" loop autoPlay/>
     </video>
     <h2 className='name1'>Ellen</h2>
     </div>
    </div>
  
  )
}

export default UserTwo