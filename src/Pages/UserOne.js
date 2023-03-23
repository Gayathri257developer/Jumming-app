import React from "react";
import './Layout.css';
import video1 from '../assets/video-1.mp4'

const UserOne = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="user col-1">
        <video src={video1} width="100%" height="100%" loop autoPlay>
       
    </video>
    <h2>John</h2>
        </div>
      </div>
    </div>
  );
};

export default UserOne;
